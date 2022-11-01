function plunk<DataType, KeyType extends keyof DataType>(
    items: DataType[], 
    key: KeyType
): DataType[KeyType][] {
    return items.map((item) => item[key])
}

const dogs = [
    {
        name: 'Mimi',
        age: 12
    },
    {
        name: 'LG',
        age: 14
    },
]
console.log(plunk(dogs, 'age'));
console.log(plunk(dogs, 'name'));

interface BaseEvent {
    time: number,
    user: string
}

interface EventMap {
    addToCart: BaseEvent & { quantity: number, productID: string },
    checkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: Name, data: EventMap[Name]):void {
    console.log([name, data]);
}

sendEvent('addToCart', 
    {
        productID: 'foo',
        user: 'baz',
        quantity: 1,
        time: 10,
    }
)

sendEvent('checkout',
    {
        time: 20,
        user: 'bob'
    }
)

//
console.log(dogs.map((dog) => dog['name']));
