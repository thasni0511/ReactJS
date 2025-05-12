// display.ts
var studentDiv = document.getElementById('studentDetails');
// Read from localStorage
var studentDataString = localStorage.getItem('student');
if (studentDataString) {
    var student = JSON.parse(studentDataString);
    studentDiv.innerHTML = "\n    <p><strong>Name:</strong> ".concat(student.name, "</p>\n    <p><strong>Age:</strong> ").concat(student.age, "</p>\n    <p><strong>Grade:</strong> ").concat(student.grade, "</p>\n  ");
}
else {
    studentDiv.innerHTML = "<p>No student data found.</p>";
}
