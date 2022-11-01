export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback()
}

type MutationFunction = (value: number) => number

// export function arrayMutate(numbers: number[], mutate: (value: number) => number): number[] {
//     return numbers.map(mutate)
// }

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    return numbers.map(mutate)
}

console.log(
    arrayMutate(
        [1, 2, 3, 4, 5],
        ( (value) => ( value * 10) )
    )
);

const myNewMutateFunction: MutationFunction = (value: number) => value * 100

console.log(myNewMutateFunction(5));

type AddressFunction = (value: number) => number

export function createAddress(number: number): AddressFunction {
    console.log(number);
    return (value: number) => number + value
}

const address_1 = createAddress(23)
console.log(address_1(5));


const address_2 = createAddress(4)
console.log(address_2(7));



// 


const mul = (value: number): number => {
    value = value * 2
    return value * 2
}
console.log([1,2,3,4].map(mul));

const transform = (arrays: number[],callbackfunction: (value:number)=>number) => {
    arrays = arrays.filter((value) => value %2 == 0)
    console.log(arrays);
    return arrays.map(callbackfunction)
}
console.log(transform([3,4,5,6,7,8],(value)=>{
    return value * 2
}))

const multiply = (number: number): (value:number) => number => {
    return (value: number) => value * number
}
console.log(multiply(5));

console.log([1,2,3,4,5].map(multiply(6)));

const times = multiply(8)
console.log([1,2,3,4,5].map(times));