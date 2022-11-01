const user = {
    id: ' 123qwer',
    info: {
        // email: 'asdfg'
    }
}
console.log(user);

// console.log(user.info.email);
console.log(user?.info?.email);
console.log(user?.info?.email ?? undefined);
console.log(user?.info?.email ?? 'i dont know');

user['info']['email'] = '@gmail.com'
console.log(user);
console.log(user?.info?.email ?? 'i dont know');
