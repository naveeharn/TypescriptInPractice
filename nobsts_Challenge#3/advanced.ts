type Handler<Type> = {
    [Property in keyof Type as `map${Capitalize<string & Property>}`]?: (data: Type[Property]) => Type[Property]
} & {
    [Property in keyof Type as `filter${Capitalize<string & Property>}`]?: (data: Type[Property]) => boolean
}

// type ProcessedEvent<Type> = {
//     eventName: keyof Type,
//     data: Type[keyof Type]
// }

class AdvancedEventProcessor<Type extends {}> {
    private handlers: Handler<Type>[] = []
    private processed: ProcessedEvent<Type>[] = []

    handleEvent<Key extends keyof Type>(eventName: Key, data: Type[Key]): void {
        let allowEvent = true
        const capitalize = (s: string) => `${s.charAt(0)}${s.slice(1)}`

        // for (const handler of this.handlers) {
        //     const filterFunction = handler[`filter${capitalize(eventName)}`]
        //     if (filterFunction && !filterFunction(data)) {
        //         allowEvent = false
        //         break
        //     }
        // }
        // if (allowEvent) {
        //     let mappedData = { ...data }
        //     for (const handler of this.handlers) {
        //         const mapFunction = handler[`map${capitalize(eventName)}`]
        //         if (mapFunction) {
        //             mappedData = mapFunction(mappedData) as Type[Key]
        //         }
        //     }
        // }
    }

    addHandler(handler: Handler<Type>): void {
        this.handlers.push(handler)
    }

    getProcessedEvents(): void {

    }
}
interface EventMap {
    login: { user?: string; name?: string; hasSession?: boolean };
    logout: { user?: string };
}

class UserAdvancedEventProcessor extends AdvancedEventProcessor<EventMap> { }

const advanced_uep = new UserAdvancedEventProcessor();
// advanced_uep.addHandler({
//     filterLogin: ({ user }) => Boolean(user),
//     mapLogin: (data) => ({
//         ...data,
//         hasSession: Boolean(data.user && data.name),
//     }),
// });

// advanced_uep.handleEvent("login", {
//     user: null,
//     name: "jack",
// });
// advanced_uep.handleEvent("login", {
//     user: "tom",
//     name: "tomas",
// });
// advanced_uep.handleEvent("logout", {
//     user: "tom",
// });

// console.log(advanced_uep.getProcessedEvents());

/*
Result:
[
    {
        eventName: 'login',
        data: { user: 'tom', name: 'tomas', hasSession: true }
    },
    { 
        eventName: 'logout', 
        data: { user: 'tom' } 
    }
]
*/