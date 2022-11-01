// type MyFlexibleDogInfo = {
//     name: string
// } & Record<string, string>

type MyFlexibleDogInfo = {
    name: string
    [key: string]: string | number
}

const dog: MyFlexibleDogInfo = {
    name: 'LG',
    breed: 'Mutt',
    age: 22,
    weight: 5,
}

console.log(dog);


interface DogInfo {
    name: string,
    age: number,
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: null
}

type DogInfoOptions = OptionsFlags<DogInfo>

// Mapped Types
type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (newValue: Type[Property]) => void
} & {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: () => void
}

function listenToObject<Type>(object: Type, listeners: Listeners<Type>): void {
    throw 'Needs to be implemented'
}

const lg: DogInfo = {
    name: 'LG',
    age: 13,
}

type DogInfoListeners = Listeners<DogInfo>

listenToObject(lg,
    {
        onNameChange: (value: string) => { },
        onAgeChange: (value: number) => { },
        onNameDelete: () => { },
        onAgeDelete: () => { },
    }
)