class Doggy {
    // public name: string = ''
    // public age: number = 0
    // constructor(name: string, age: number) {
    //     this.name = name
    //     this.age = age
    // }

    // constructor(public name: string, public age: number) {}
    
    constructor(public readonly name: string, public readonly age: number) {}
}

const lg_2 = new Doggy('LG', 13)
console.log(lg_2.name);
console.log(lg_2.age);
// lg_2.name = 'Foo'
// lg_2.age = 14
console.log(lg_2.name);
console.log(lg_2.age);

class DogList {
    private doggies: Doggy[] = []

    /*public*/ static instance: DogList = new DogList()

    private constructor() {}

    // public addDog(dog: Doggy) {
    //     this.doggies.push(dog)
    // }

    static addDog(dog: Doggy) {
        DogList.instance.doggies.push(dog)
    }

    getDogs() {
        return this.doggies
    }
}

console.log(DogList.instance);

DogList.addDog(lg_2)
const bond = new Doggy('Bond', 8)
DogList.addDog(bond)
console.log(DogList.instance.getDogs());

