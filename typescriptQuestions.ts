// TYPESCRIPT QUESTIONS GOVERNOR-INITIATIVE'S FIRST TYPESCRIPT ASSIGMENT
let personName: string = "Malik";
console.log("Hello " + personName + ", would you like to learn some Python today?");

let name2: string = "DaveMalik";
console.log("Lowercase Name:", name2.toLowerCase());
console.log("Uppercase Name:", name2.toUpperCase());
console.log("Titlecase Name:", name2.replace(/\b\w/g, (char) => char.toUpperCase()));

let famousQuote: string = "Nelson Mandela. once said, \"The greatest glory in living lies not in never falling, but in rising every time we fall.\"";
console.log(famousQuote);

let famous_person: string = "Nelson Mandela";
let message: string = famous_person + " once said, \"The greatest glory in living lies not in never falling, but in rising every time we fall.\"";
console.log(message);

let personNameWithWhitespace: string = "\t\n   DaveMalik   \t\n";
console.log("Name with whitespace:", personNameWithWhitespace);
console.log("Stripped Name:", personNameWithWhitespace.trim());

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

let favoriteNumber: number = 69;
console.log("My favorite number is: " + favoriteNumber);

let naaam: string = "Dave";
console.log("Hello, " + naaam + "!");

let names: string[] = ["Dave", "Professor", "Malik"];
for (let name of names) {
    console.log(name);
}

for (let name of names) {
    console.log("Hello, " + name + "!");
}

let favoriteTransportation: string[] = ["Car", "Motorcycle", "Bicycle"];
for (let item of favoriteTransportation) {
    console.log("I would like to own a " + item + ".");
}

let guestList: string[] = ["DaveMalik", "Oggy", "Mario"];
for (let guest of guestList) {
    console.log("Dear " + guest + ", you are invited to dinner.");
}

if (guestList.length > 0) {
    let cannotMakeIt: string | undefined = guestList.pop();
    if (cannotMakeIt !== undefined) {
        console.log("Unfortunately, " + cannotMakeIt + " can't make it to dinner.");
    } else {
        console.log("The guest list is empty.");
    }
} else {
    console.log("The guest list is empty.");
}

let newInvitee: string = "Spiderman";
guestList.push(newInvitee);

for (let guest of guestList) {
    console.log("Dear " + guest + ", you are invited to dinner.");
}

console.log("Good news! We found a bigger dinner table.");

guestList.unshift("Riyaz");
guestList.splice(Math.floor(guestList.length / 2), 0, "Ronaldo");
guestList.push("Detective");

for (let guest of guestList) {
    console.log("Dear " + guest + ", you are invited to dinner.");
}

console.log("Sorry, the new dinner table won't arrive in time. We can only invite two guests.");

while (guestList.length > 2) {
    let removedGuest: string | undefined = guestList.pop();
    if (removedGuest !== undefined) { 
        console.log("Sorry, " + removedGuest + ", we won't be able to invite you to dinner.");
    } else {
        console.log("The guest list have gotten empty.");
        break; 
    }
}

for (let guest of guestList) {
    console.log("Hey, " + guest + ", you are still invited to dinner.");
}

guestList = [];
console.log("Empty guest list:", guestList);

let placesToVisit: string[] = ["Karachi", "NewYorkCity", "London", "Sydney", "Dubai", "Eygpt"];

console.log("Original order:");
for (let place of placesToVisit) {
    console.log(place);
}

console.log("Alphabetical order:");
for (let place of placesToVisit.slice().sort()) {
    console.log(place);
}

console.log("Original order again:");
for (let place of placesToVisit) {
    console.log(place);
}

console.log("Reverse alphabetical order:");
for (let place of placesToVisit.slice().sort().reverse()) {
    console.log(place);
}

console.log("Original order again:");
for (let place of placesToVisit) {
    console.log(place);
}

console.log("Reversed order:");
placesToVisit.reverse();
for (let place of placesToVisit) {
    console.log(place);
}

console.log("Reversed order again:");
placesToVisit.reverse();
for (let place of placesToVisit) {
    console.log(place);
}

console.log("Sorted order:");
for (let place of placesToVisit.slice().sort()) {
    console.log(place);
}

console.log("Reverse sorted order:");
for (let place of placesToVisit.slice().sort().reverse()) {
    console.log(place);
}

console.log("Number of people invited to dinner: " + guestList.length);

let favoriteBooks: string[] = ["To Kill a Mockingbird", "1984", "The Catcher in the Rye"];
for (let book of favoriteBooks) {
    console.log("One of my favorite books is: " + book);
}

let favoriteThings: { [key: string]: string } = {
    fruit: "Mango",
    animal: "Dog",
    color: "Viridian"
};

for (let key in favoriteThings) {
    console.log("My favorite " + key + " is " + favoriteThings[key]);
}

let car: string = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'audi'? I predict False.");
console.log(car == 'audi');

console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru');

console.log("Is car.toLowerCase() == 'AUDI'? I predict False.");
console.log(car.toLowerCase() == 'AUDI');

console.log("Is 5 > 3? I predict True.");
console.log(5 > 3);

console.log("Is 5 < 3? I predict False.");
console.log(5 < 3);

console.log("Is 5 >= 5? I predict True.");
console.log(5 >= 5);

console.log("Is 5 <= 3? I predict False.");
console.log(5 <= 3);

console.log("Is (5 > 3) && (5 < 10)? I predict True.");
console.log((5 > 3) && (5 < 10));

console.log("Is (5 > 3) || (5 < 3)? I predict True.");
console.log((5 > 3) || (5 < 3));

console.log("Is 'apple' in favoriteBooks? I predict True.");
console.log(favoriteBooks.includes('apple'));

console.log("Is 'banana' not in favoriteBooks? I predict True.");
console.log(!favoriteBooks.includes('banana'));

let alien_color: string = 'green';
if (alien_color === 'green') {
    console.log("You just earned 5 points.");
}

if (alien_color === 'green') {
   

 console.log("You just earned 5 points for shooting the alien.");
} else {
    console.log("You just earned 10 points.");
}

if (alien_color === 'green') {
    console.log("You earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color === 'red') {
    console.log("You earned 15 points.");
}

let age: number = 25;
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

let favorite_fruits: string[] = ["apple", "banana", "orange"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("grapes")) {
    console.log("You really like grapes!");
}

let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + username + ", thank you for logging in again.");
}
}

if (usernames.length === 0) {
    console.log("We need to find some users!");
}

let current_users: string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users: string[] = ["user4", "user5", "user6", "user7", "user8"];

for (let new_user of new_users) {
    if (current_users.map(user => user.toLowerCase()).includes(new_user.toLowerCase())) {
        console.log("Sorry, " + new_user + ", you need to enter a new username.");
    } else {
        console.log("Congratulations, " + new_user + ", your username is available!");
    }
}

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(number + "st");
    } else if (number === 2) {
        console.log(number + "nd");
    } else if (number === 3) {
        console.log(number + "rd");
    } else {
        console.log(number + "th");
    }
}

let pizzas: string[] = ["Margherita", "Pepperoni", "Vegetarian"];
for (let pizza of pizzas) {
    console.log("I like " + pizza + " pizza.");
}
console.log("I really love pizza!");

let animals: string[] = ["dog", "cat", "rabbit"];
for (let animal of animals) {
    console.log("A " + animal + " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");

function make_shirt(size: string, message: string): void {
    console.log("You ordered a " + size + " shirt with the message: " + message);
}

make_shirt("Large", "I love TypeScript");
make_shirt("Medium", "I love TypeScript");
make_shirt("Small", "I love JavaScript");

function carInfo(manufacturer: string, modelName: string, options?: { [key: string]: string }): void {
    let info: { [key: string]: string } = {
        "Manufacturer": manufacturer,
        "Model": modelName
    };
    if (options) {
        for (let key in options) {
            info[key] = options[key];
        }
    }
    console.log(info);
}

carInfo("Toyota", "Camry", { "Color": "Red", "Year": "2022" });
carInfo("Honda", "Civic", { "Color": "Blue", "Features": "Sunroof" });
