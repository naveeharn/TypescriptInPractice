// function simpleStringState(initial: string): [() => string, (value: string) => string] {
//     let str: string = initial
//     return [() => str, (value) => str = value]
// }

// const [str_getter, str_setter] = simpleStringState('Hello')
// console.log(str_getter());
// str_setter('Yo WTF')
// console.log(str_getter());

function simpleTypeState<Type>(initial: Type): [() => Type, (value: Type) => Type] {
    let data: Type = initial
    return [() => data, (value) => data = value]
}

let [number_getter, number_setter] = simpleTypeState(5)
console.log(number_getter());
number_setter(7)
console.log(number_getter());

let [string_getter, string_setter] = simpleTypeState<string | null>(null)
console.log(string_getter());
string_setter('llun')
console.log(string_getter());

let [anytype_getter, anytype_setter] = simpleTypeState<any | null>(null)
console.log(anytype_getter());
anytype_setter(8)
console.log(anytype_getter());

interface Rank<RankItem> {
    item: RankItem,
    rank: number
}

// function ranker(items: unknown[], rank: (value: unknown) => number): unknown[] {}
function ranker<RankItem>(items: RankItem[], rank: (value: RankItem) => number): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map((item) => ({
        item,
        rank: rank(item)
    }))
    
    console.log(items);
    console.log(ranks);

    console.log(rank(
        {
            name: 'Pikachu',
            hp: 2000
        } as RankItem));

    ranks.sort((a, b) => a.rank - b.rank)
    return ranks.map((rank) => rank.item)
}

interface Pokemon {
    name: string,
    hp: number
}

const pokemon: Pokemon[] = [
    {
        name: 'Pikachu',
        hp: 20
    },
    {
        name: 'Megaasaur',
        hp: 5
    },
    {
        name: 'Bulbasaur',
        hp: 30
    },
]

const ranks = ranker(pokemon, ({ hp }) => hp)
console.log(ranks);




// 
function TS<Type>(initial: number, second: Type): Type {
    let a: number = initial
    let b: Type = second
    return a as Type
}

let q = TS(5, 'ppp')
console.log(q);

console.log([
    {
    name: 'Pikachu',
    hp: 20
    },
    {
        name: 'kachu',
        hp: 32
    },
    {
    name: 'achu',
    hp: 17
    },
].map(value => `${value.hp}`));

