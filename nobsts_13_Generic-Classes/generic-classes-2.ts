interface KeyTypeDatabase<Key, Type> {
    get(id: Key): Type
    set(id: Key, value: Type): void 
}

type DBKeyType = string | number | symbol

class InMemoryKeyTypeDatabase<Key extends DBKeyType, Type> implements KeyTypeDatabase<Key, Type> {
    protected db: Record<Key, Type> = {} as Record<Key, Type>
    get(id: Key): Type {
        return this.db[id]
    }
    set(id: Key, value: Type): void {
        this.db[id] = value
    }
    
}

interface Persistable {
    saveToString(): string
    restoreFromString(storedState: string): void
}

class PersistentKeyTypeMemoryDB<Key extends DBKeyType, Type> extends InMemoryKeyTypeDatabase<Key, Type> implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState) 
    }
}

const myKeyTypeDB = new PersistentKeyTypeMemoryDB()
myKeyTypeDB.set('foo',12)
myKeyTypeDB.set('glory', 'heuristic')
console.log(myKeyTypeDB);

const myStringKeyNumberTypeDB = new PersistentKeyTypeMemoryDB<string, number>()
myStringKeyNumberTypeDB.set('foo', 22)
myStringKeyNumberTypeDB.set('baz', 24)
console.log(myStringKeyNumberTypeDB);
