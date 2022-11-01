//NOSONAR
let username: string = 'Jack'
let hasLoggedIn: boolean = true

username += ' Herringtion'
console.log(hasLoggedIn);

let myNumber: number = 10
let myRegex: RegExp = /foo/

const names: string[] = username.split(' ')
console.log(names.map((e) => {
    return e.toUpperCase()
}));

const myValues: Array<number> = [1, 2, 3]
console.log(myValues.length);

let myPerson_1 = {
    first: 'Jack',
    last: 'Herrington'
}
let myPerson_2: {
    first: string,
    last: string,
    cool: boolean
} = {
    first: 'Jack',
    last: 'Herrongton',
    cool: false
}

interface Person {
    first: string,
    last: string,
    cool: boolean
}
let myPerson_3: Person = {
    first: 'Jack',
    last: 'Herrongton',
    cool: false
}
console.log(myPerson_3);

const ids = {
    10: 'a',
    20: 'b'
}
// ids[30] = 'c' // cannot add new key in Object 
console.log(typeof ids, ids);
const ids_2: Record<number, string> = {
    10: 'a',
    20: 'b'
}
ids_2[30] = 'c' // can add new key in Object with Record<key type, value type>
console.log(typeof ids_2, ids_2);
ids_2['40'] = 'd'
console.log(typeof ids_2, ids_2);

if (ids_2[30] == 'c') {
    console.log(ids_2[30]);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

[1,2,3,4,5].forEach((value) => {
    console.log(value);
});
[1,2,3,4,5].forEach((value: number) => {
    console.log(value);
});

console.log([1,2,3,4,5].map(
    (value) => value * 4
))

const output = [1,2,3,4,5].map(
    (value) => value * 4
)
console.log(output);

const output_2: number[] = [1,2,3,4,5].map(
    (value) => value * 4
)
console.log(output_2);

const output_3: string[] = [1,2,3,4,5].map(
    (value) => `${value * 4}`
)
console.log(output_2);
