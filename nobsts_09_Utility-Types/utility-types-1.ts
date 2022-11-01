interface MyUser {
    name: string,
    id: number,
    email?: string,
    phone?: string,
}

// interface MyUserOptionals {
//     name?: string,
//     id?: string,
//     email? : string,
// }

type MyUserOptionals = Partial<MyUser>

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrides,
    }
}

console.log(merge(
    {
        name: 'Jack',
        id: 2,
        email: 'idk@hotmail.com'
    },
    {
        email: 'weeb@hotmail.com',
        phone: '0245683131'
    },
));

type RecordMyUser = Record<string, MyUser>

type RequireMyUser = Required<MyUser>

type JustEmailAndName = Pick<MyUser, 'email' | 'name'>

type UserWithoutID = Omit<MyUser, 'id'>

const mapById = (users: MyUser[]): Record<string, MyUser> => {
    return users.reduce((prev, curr) => {
        return {
            ...prev,
            [curr.id]: curr,
        }
    }, {})
}
console.log(mapById(
    [
        {
            id: 8,
            name: 'Mr.Foo'
        },
        {
            id: 5,
            name: 'Mrs. Baz'
        },
    ]
));
console.log(mapById(
    [
        {
            id: 8,
            name: 'Mr.Foo'
        },
        {
            id: 5,
            name: 'Mrs. Baz'
        },
    ]
)[8]);


const mapByIdAndRemoveId = (users: MyUser[]): Record<MyUser['id'], UserWithoutID> => {
    return users.reduce((prev, curr) => {
        const {id, ...other} = curr
        return {
            ...prev,
            [id]: other,
        }
    }, {})
}
console.log(mapByIdAndRemoveId(
    [
        {
            id: 8,
            name: 'Mr.Foo'
        },
        {
            id: 5,
            name: 'Mrs. Baz'
        },
    ]
));





//
console.log(
    {
        ...{ a: 1, b: 2 },
        ...{ b: 4, c: 3 },
    }
);
