interface Cat {
    readonly name: string,
    breed: string,
}

type ReadonlyCat = Readonly<Cat>

function makeCat(name: string, breed: string): ReadonlyCat {
    return {
        name,
        breed,
    }
}

const usul = makeCat('Usul', 'Tabby')
// usul.name = 'Piter'


// Readonly Tuples

// function makeCoordinate(x: number, y: number, z: number): [number, number, number] {
//     return [x, y, z]
// }
function makeCoordinate(x: number, y: number, z: number): readonly [number, number, number] {
    return [x, y, z]
}

const c1 = makeCoordinate(10, 20, 30)
console.log(c1);
// c1[0] = 4
console.log(c1);


//Immutable Arrays
const reallyConst = [1, 2, 3] as const
// reallyConst[0] = 40