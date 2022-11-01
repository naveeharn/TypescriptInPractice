// function printIngredient(quality: string, ingredient: string) {
//     console.log(`${quality} ${ingredient}`)
// }

function printIngredient(quality: string, ingredient: string, extra?:string) {
    console.log(`${quality} ${ingredient} ${extra ? `${extra}`:''}`);
}

printIngredient('1c','Flour')
printIngredient('1c','Sugar')
printIngredient('1c','Sugar','somthing else',)

interface User {
    id: string,
    info: {
        email?: string
    }
}

function getEmail(user: User) :string {
    if (user.info) {
        return user.info.email!
    }
    return ''
}

function getEmailEasy(user: User): string {
    return user?.info?.email ?? ''
}

console.log(getEmailEasy({id: 'aa',info:{email:''}}));


function addWithCallback(x: number, y:number, callback?: ()=> void) {
    console.log([x,y]);
    // if (callback) {
    //     callback()
    // }
    callback?.()
}

const user = {
    id: ' 123qwer',
    info: {
        email: 'asdfg'
    }
}
console.log(user?.info?.email ?? 'ddd');
