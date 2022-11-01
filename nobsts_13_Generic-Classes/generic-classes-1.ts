interface TypeDatabase<Type>{
    get(id: string): Type
    set(id: string, value: Type): void
}

class InMemoryTypeDatabase<Type> implements TypeDatabase<Type> {
    protected db: Record<string, Type> = {}
    get(id: string): Type {
        return this.db[id]
    }
    set(id: string, value: Type): void {
        this.db[id] = value
    }
}

interface Persistable {
    saveToString(): string,
    restoreFromString(storedState: string): void
}

class PersistentTypeMemoryDB<Type> extends InMemoryTypeDatabase<Type> implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        return JSON.parse(storedState)
    }
}

const myTypeDB = new PersistentTypeMemoryDB()
myTypeDB.set('foo',12)
myTypeDB.set('glory', 'oo')
console.log(myTypeDB);

const myNumberTypeDB = new PersistentTypeMemoryDB<number>()
myNumberTypeDB.set('foo',12)
myNumberTypeDB.set('glory', 26)
console.log(myNumberTypeDB);

