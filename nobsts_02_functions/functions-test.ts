import addNumbers, { addStrings, fetchData, format, getName, printFormat }  from "./functions";

console.log(addNumbers(1,5));

console.log(addStrings('Hello','World'));
console.log(addStrings('Hello'));

console.log(format('key','value'));
console.log(format('key',5));

printFormat('key', 8)

console.log(fetchData('sss'));

console.log(getName({first: 'a', last: 'b'}));
