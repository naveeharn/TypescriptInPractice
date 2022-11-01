// const loaded = 'beforeLoad'
// const loading = 'loading'
// const loaded = 'loaded'

// const isLoading  = (state: string) => state === loading

// console.log(isLoading('loaded'));

enum LoadingState {
    beforeLoad = 'beforeLoad',
    loading = 'loading',
    loaded = 'loaded',
}

const isLoading = (state: LoadingState) => state === LoadingState.loading

console.log(isLoading(LoadingState.beforeLoad));
console.log(isLoading(LoadingState.loading));
console.log(isLoading(LoadingState.loaded));

const enlishLoadingStates = {
    [LoadingState.beforeLoad]: 'Before Load'
}
console.log(enlishLoadingStates);

//Literal Types
// function rollDice(dice: number): number {
//     let pip = 0
//     for (let i = 0; i < dice; i++) {
//         pip += Math.floor(Math.random() * 5) + 1
//     }
//     return pip
// }

// Number Literals
function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0
    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1
    }
    return pip
}

console.log(rollDice(1));

// String Literals
function sendEventEnums(name: 'addToCart', data: {productId: number}): void
function sendEventEnums(name: 'checkout', data: {cartCount: number}): void
function sendEventEnums(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
}

sendEventEnums('addToCart', {
    productId: 124
})