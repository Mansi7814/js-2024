let name = "Mansi Jain"
let age = 24
console.log(name+ " " + age);
console.log(`My name is ${name}.\nMy age is ${age}.`);

const gameName = String("mansi-hc-com")
console.log(gameName[0],gameName[1],gameName[2]);
name1 = gameName[0] + gameName[1] + gameName[2]
console.log(name1);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('-'));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(0, 9)
console.log(anotherString);

const newStringOne = "    Khushi    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar')) // checks if the current URL includes the string or not and gives result in True and False

console.log(gameName.split('-'));