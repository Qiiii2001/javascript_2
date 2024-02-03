/*
Exercise1:
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function displayFavoriteFoods(person) {
    Object.keys(person).forEach(foodCategory => {
        console.log(`Favorite ${foodCategory}:`);
        if (Array.isArray(person[foodCategory])) {
            person[foodCategory].forEach(foodItem => {
                if (typeof foodItem === 'object') {
                    // If it's an object, iterate through its keys
                    Object.keys(foodItem).forEach(shop => {
                        console.log(`  ${shop}: ${foodItem[shop]}`);
                    });
                } else {
                    // It's a string, so just log it
                    console.log(`  ${foodItem}`);
                }
            });
        } else {
            // It's a string, so just log it
            console.log(`  ${person[foodCategory]}`);
        }
    });
}

// Display the favorite foods of person3
displayFavoriteFoods(person3);

/*
Exercise 2:
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Use an arrow function to create the printInfo method
    printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Create another arrow function for the addAge method
    addAge = () => {
        this.age += 1;
    };
}

// Create two people using the 'new' keyword
let person1 = new Person('Alice', 25);
let person2 = new Person('Bob', 30);

// Print both of their infos
person1.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
person1.addAge();
person1.addAge();
person1.addAge();

// Print the info of the person with the incremented age
person1.printInfo();

/*
    Exercise 3:
    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            resolve("Small Number");
        }
    });
}

// Example usage:
checkStringLength("Hello World")
    .then(message => console.log(message))
    .catch(error => console.log(error));

checkStringLength("Hello")
    .then(message => console.log(message))
    .catch(error => console.log(error));

/* Exercise 4:
    You are going to be given a word. Your job is to return the middle character of the word. 
    If the word's length is odd, return the middle character. 
    If the word's length is even, return the middle 2 characters.
*/
function getMiddle(s) {
    let middle = Math.floor(s.length / 2);

    if (s.length % 2 === 0) {
        return s.substring(middle - 1, middle + 1);
    } else {
        return s.charAt(middle);
    }
}

// Examples:
console.log(getMiddle("test"));    // should return "es"
console.log(getMiddle("testing")); // should return "t"
console.log(getMiddle("middle"));  // should return "dd"
console.log(getMiddle("A"));       // should return "A"

// Exercise 5: 
//You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    let sum = 0;

    arr.forEach(number => {
        if (number > 0) {
            sum += number;
        }
    });

    return sum;
}

// Example usage:
console.log(positiveSum([1, -4, 7, 12])); // Output: 20
