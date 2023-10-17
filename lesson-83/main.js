// const user = {
//     name: 'Alex',
//     age: 23,
//     isAdmin: false
// }

// console.log(user.name)


// const user = {
//     alex: {
//         age: 23,
//         isAdmin: false
//     }, 
//     Jhon: {
//         age: 20,
//         isAdmin: true,

//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(user.Jhon)
// user.Jhon.sayHello('Tom')


// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'jhon',
//         age: 30,
//         isAdmin: true
//     },
// ]

// users.push({
//     name: 'ivan',
//     age: 30,
//     isAdmin: true
// })

// for(let i = 0; i < users.length; i++) {
//     console.log(users[i])
// }

// const foo = 'hello world'
// console.log(foo.toUpperCase())

// ==========================================
// Домашнее задание


const myProfile = {
    name: 'Danil',
    secondName: 'Shishatskiy',
    age: '26',
};


myProfile.sayHello = function (name) {
    return `Hello ${name}`;
};


const users = [
    { name: 'user1', isAdmin: true },
    { name: 'user2', isAdmin: false },
    { name: 'user3', isAdmin: false },
    { name: 'user4', isAdmin: true },
    { name: 'user5', isAdmin: false },
];


let simpleUserCount = 0;


for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUserCount++;
    }
}


console.log("Количество простых пользователей:", simpleUserCount);