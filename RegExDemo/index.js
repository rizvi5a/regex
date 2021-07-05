let Validator = require("./RegExDemo/Validator");

let validate = new Validator();

incomingData = {
    number:8,
    name:"Jason",
    streetDirection: "w",
    streetName: "Morgan",
    email:"jsmith@email.com"
}

console.log(`Is incomingData.number a number: ${validate.isNumber(incomingData.number)?"yes":"no"}`);
console.log(`Which are numbers?`)
Object.entries(incomingData).forEach((entry) => {
    const [key, value] = entry; 
    console.log(`${value}: ${validate.isNumber(value)?"yes":"no"}`)
});

console.log(`\nWhich are words?`)
Object.entries(incomingData).forEach((entry) => {
    const [key, value] = entry; 
    console.log(`${value}: ${validate.isWord(value)?"yes":"no"}`)
});


var data = ["ksjadk9384","8908",89723,"Test","Check"]

for(let i=0;i<data.length;i++){
console.log(`The test data ${data[i]} is word : ${validate.isWord(data[i])}`)
console.log(`The test data ${data[i]}is a Number: ${validate.isNumber(data[i])}`)

}