interface Database {
    get(id: string): string
    set(id: string, value: string): void
}

class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {}
    
    get(id: string): string {
        return this.db[id]
    }
    set(id: string, value: string): void {
        this.db[id] = value
    }
}

const myDB = new InMemoryDatabase()
myDB.set('foo', 'bat')
myDB.set('loo', 'gat')


console.log(myDB);
console.log(myDB.get('foo'));

// myDB.db['foo'] = 'baz'
myDB.set('foo', 'bulory')
console.log(myDB.get('foo'));



interface Persistable {
    saveToString(): string,
    restoreFromString(storedState: string): void
}

class PersistentMemotyDB extends InMemoryDatabase implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db)
    }
    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState)
    }
}

const myPersistentDB = new PersistentMemotyDB()
myPersistentDB.set('foo', 'bar')
const saved = myPersistentDB.saveToString()
console.log(myPersistentDB.get('foo'));
myPersistentDB.set('foo', 'db1- bar')
console.log(myPersistentDB.get('foo'));
console.log(myPersistentDB.saveToString());

const myPersistentDB_2 = new PersistentMemotyDB()
myPersistentDB_2.restoreFromString(saved)

console.log(myPersistentDB_2);
console.log(myPersistentDB_2.get('foo'));



//
console.log(JSON.parse('{"name":"John", "age":30, "city":"New York"}'));
