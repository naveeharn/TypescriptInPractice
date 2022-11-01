function myLogFunction() {
    return (str: string) => { console.log(str) }
}

const logger = myLogFunction()
logger('Your String')


function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = ''
        log(str: string) {
            console.log(str);
            this.completeLog += str + '\n'
        }
        dumpLog() {
            return this.completeLog
        }
    }
}

const MyLogger = createLoggerClass()
const logger_2 = new MyLogger()

logger_2.log('Foo')
logger_2.log('Foo-2')
console.log(logger_2.dumpLog());

function CreateSimpleMemoryDatabase<Type>() {
    return class SimpleMemoryDatabase {
        private db: Record<string, Type> = {} //as Record<string, Type>

        set(id: string, value: Type) {
            this.db[id] = value
        }
        get(id: string): Type {
            return this.db[id] // as Type
        }
        getObject(): object {
            return this.db
        }
    }
}

const StringTypeDatabase = CreateSimpleMemoryDatabase<string>()

const string_db_1 = new StringTypeDatabase()
string_db_1.set('a', 'hello')
string_db_1.set('b', 'world')
console.log(string_db_1);
console.log(string_db_1.get('a'));
console.log(string_db_1.getObject());

type Constructor<Type> = new (...args: any[]) => Type

function Dumpable<Type extends Constructor<{ getObject(): object }>>(Base: Type) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject());
        }
    }
}

const DumpableStringDatabase = Dumpable(StringTypeDatabase)
const string_db_2 = new DumpableStringDatabase()
string_db_2.set('jack', 'hello jack')
string_db_2.set('herrington', 'hello herrington')
string_db_2.dump()