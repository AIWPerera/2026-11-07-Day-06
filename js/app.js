
{
    var bike = "YAMAHA";
}
console.log(bike);



// Array
let customer = ["John", "Jane", "Bob", true, 42];

console.log(customer);



// Object - Java Class
class Customer {
    name;
    age;
    address;

    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
}

let customer1 = new Customer("John", 30, "123 Main St");
let customer2 = new Customer("Jane", 25, "456 Oak Ave");

console.log(customer1);
console.log(customer2);



// Object - JavaScript
let customer3 = {
    name: "Bob",
    age: 40,
    address: "789 Elm St"
};

console.log(customer3);




// Array List
let CustomerList = [
    {
        name: "Saman Kumara",
        age: 30,
        address: "Colombo",

        Items: [
            {
                itemName: "Laptop",
                itemPrice: 1000000
            },
            {
                itemName: "Mouse",
                itemPrice: 2000
            }
        ]
    },

    {
        name: "Nimal Perera",
        age: 25,
        address: "Wadduwa"
    },

    {
        name: "Indumini Wathsala",
        age: 21,
        address: "Molligoda"
    }
];

console.log(CustomerList);
// Access Array List Data
console.log(CustomerList[0].Items[0].itemName);




//----------------DOM Manipulatiions (doument object model)---------------
console.log(document);
document.write("<h1>Hello World....</h1>");
document.write("<h2>Hello World....</h2>");