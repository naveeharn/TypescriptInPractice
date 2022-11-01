type ThreeDCoordinate = [x: number, y: number, z: number]

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    // return [
    //     c1[0] + c2[0],
    //     c1[1] + c2[1],
    //     c1[2] + c2[2],
    // ]

    // const sum = c1.map(function (value_c1, index) {
    //     return value_c1 + c2[index]
    // }) as ThreeDCoordinate
    // return sum

    // return c1.map((value_c1, index) => {
    //     return value_c1 + c2[index]
    // }) as ThreeDCoordinate

    return c1.map((_, index) => {
        return c1[index] + c2[index]
    }) as ThreeDCoordinate
}

console.log(add3DCoordinate([1, 2, 3], [2, 3, 4]));

function simpleStringState(initial: string): [() => string, (value: string) => void] {
    let str: string = initial
    return [() => str, (value: string) => { str = value }]
}

const [str_1_getter, str_1_setter] = simpleStringState('hello')
console.log(str_1_getter());
str_1_setter('world')
console.log(str_1_getter());



// 
function without(a: number[], i: number) { return (i = a.indexOf(i), i == -1) ? a : a.slice(0, i).concat(a.slice(i + 1)) }
console.log(without([1, 2, 3, 4, 5], 4));

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];
let sum = array1.map(function (num, idx) {
    console.log(idx);
    return num + array2[idx];
});
console.log(sum);

