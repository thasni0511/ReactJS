function user(name, age) { //function 1
    return "Hello, ".concat(name, ". You are ").concat(age, " years old.");
}
function calculateSum(a, b) { //function 2  with a default parameter
    if (b === void 0) { b = 0; }
    return a + b;
}
var scores = [85, 90, 78, 92];//array numbers
var students = ["Amina", "Alana", "Salma", "Serah"];//array strings
var studentDetails = ["Sera", 25];//tuple 1 fixed-length arrays with different types
var product = ["Laptop", 40500, true];//tuple 2 fixed-length arrays with different types
console.log(user("Thanu", 25));
console.log(calculateSum(10));
console.log(calculateSum(10, 5));
console.log(scores);
console.log(students);
console.log(studentDetails);
console.log(product);
