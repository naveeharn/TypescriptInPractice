type FilterFunction<Type> = (data: Type[keyof Type]) => boolean
type Filters<Type> = Record<keyof Type, FilterFunction<Type>[]>

type MapFunction<Type> = (data: Type[keyof Type]) => Type[keyof Type]
type Maps<Type> = Record<keyof Type, MapFunction<Type>[]>
type ProcessedEvent<Type> = {
    eventName: keyof Type,
    data: Type[keyof Type]
}

class EventProcessor <Type extends { }> {
    // private filters: Filters<Type> = <Filters<Type>> {} 
    private filters: Filters<Type> = {} as Filters<Type>
    private maps: Maps<Type> = {} as Maps<Type>
    private processed: ProcessedEvent<Type>[] = []

    handleEvent<Key extends keyof Type>(eventName: Key, data: Type[Key]): void {
        let allowEvent = true
        for(const filter of this.filters[eventName] ?? []) {
            if (! filter(data)) {
                allowEvent = false
                break
            }
        }
        if(allowEvent) {
            let mappedData = {...data}
            for (const map of this.maps[eventName] ?? []) {
                mappedData = map(mappedData) as Type[Key]
            }
            this.processed.push({
                eventName,
                data: mappedData,
            })
        }
    }

    addFilter<Key extends keyof Type>(eventName: Key, filter: (data: Type[Key]) => boolean): void {
        this.filters[eventName] ||= []
        this.filters[eventName].push(filter as FilterFunction<Type>)
    }

    addMap<Key extends keyof Type>(eventName: Key, map: (data: Type[Key]) => Type[Key]): void {
        this.maps[eventName] ||= []
        this.maps[eventName].push(map as unknown as MapFunction<Type>)
    }

    // addHandler(handler: ...) {
    // }

    getProcessedEvents() {
        return this.processed
    }
}

interface EventMap {
    login: { user?: string; name?: string; hasSession?: boolean };
    logout: { user?: string };
}

class UserEventProcessor extends EventProcessor<EventMap> { 
    // constructor() {
    //     super();
    // }
}

const uep = new UserEventProcessor();

uep.addFilter('login', ({user}) => Boolean(user))

uep.addMap('login', (data) => ({
    ...data,
    hasSession: Boolean(data.user && data.name)
}))
// uep.addHandler({
//     filterLogin: ({ user }) => Boolean(user),
//     mapLogin: (data) => ({
//         ...data,
//         hasSession: Boolean(data.user && data.name),
//     }),
// });

uep.handleEvent("login", {
    user: undefined,
    name: "jack",
});
uep.handleEvent("login", {
    user: "tom",
    name: "tomas",
});
uep.handleEvent("logout", {
    user: "tom",
});

console.log(uep.getProcessedEvents());

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