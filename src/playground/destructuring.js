// const person = {
//     name: 'Max',
//     age: 26,
//     location: {
//         city: 'Toronto',
//         temp: 32
//     }
// };

// const {name: firstName = 'Alex', age} = person;
// const name = person.name;
// const age = person.age;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     title: '2001 space odyssey',
//     author: 'Arthur Clarke',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(`the publisher name is ${publisherName}`);

const address= ['1299 Rosedale Street', 'Toronto', 'Ontario', 'M5H2K2'];
const [street, city, province="Quebec", postal_code] = address;
console.log(`You are in ${city}, ${province}`);

const  menu = ['coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [item, , medium] = menu;
console.log(`A medium ${item} costs ${medium}.`);