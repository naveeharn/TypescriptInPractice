function customForEach<Type>(items: Type[], forEachFunction: (value: Type) => void): void {
    items.reduce((previous_value, current_value) => {
        forEachFunction(current_value)
        return undefined
    }, undefined)
}

customForEach(['q', 'w', 'e'], (value) => console.log(value))
customForEach([1, 2, 3, 4, 5], (value) => console.log(`For Each ${value}`))

function customFilter<Type>(items: Type[], filterFunction: (value: Type) => boolean): Type[] {
    return items.reduce((previous_value, current_value) => (filterFunction(current_value) ? [...previous_value, current_value] : previous_value), [] as Type[])
}
console.log(customFilter([1, 2, 3, 4, 5, 6, 7, 8], (value) => value % 2 === 0));

function customMap<Key, Value>(items: Key[], mapFunction: (key: Key) => Value): Value[] {
    return items.reduce((previous_value, current_value) => [...previous_value, mapFunction(current_value as Key)], [] as Value[])
}
console.log(customMap([1, 2, 3, 4, 5], (key) => (key * 2).toString()));
console.log([1, 2, 3].map(value => value.toString()).reduce((p, c) => p + c));





//
console.log([1, 2, 3, 4, 5].reduce((previous_value, current_value) => previous_value + current_value, 0));
