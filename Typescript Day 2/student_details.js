var Grade;
(function (Grade) {
    Grade["A"] = "Excellent";
    Grade["B"] = "Good";
    Grade["C"] = "Average";
    Grade["D"] = "Poor";
    Grade["F"] = "Fail";
})(Grade || (Grade = {}));
// 3. Array to hold multiple students
var students = [];
// 4. Function to add a student
function addStudent(name, age, grade) {
    var newStudent = [name, age, grade];
    students.push(newStudent);
}
// 5. Function to display all students
function displayStudents() {
    console.log("Student Records:");
    students.forEach(function (student, index) {
        console.log("".concat(index + 1, ". Name: ").concat(student[0], ", Age: ").concat(student[1], ", Grade: ").concat(student[2]));
    });
}
// 🏁 Let's use our functions!
addStudent("Thasni", 20, Grade.A);
addStudent("sainu", 19, Grade.B);
addStudent("Thanu", 22, Grade.C);
// Display all students
displayStudents();
