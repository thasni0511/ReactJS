// display.ts
var GradeStatus;
(function (GradeStatus) {
    GradeStatus["A"] = "A";
    GradeStatus["B"] = "B";
    GradeStatus["C"] = "C";
    GradeStatus["D"] = "D";
    GradeStatus["F"] = "F";
})(GradeStatus || (GradeStatus = {}));
var studentDiv = document.getElementById('studentDetails');
var studentName = localStorage.getItem('studentName');
var age = localStorage.getItem('age');
var grade = localStorage.getItem('grade');
var studentStatus = "";
if (grade === GradeStatus.F) {
    studentStatus = "Failed";
}
else if (grade === GradeStatus.A) {
    studentStatus = "Excellent";
}
else if (grade === GradeStatus.B) {
    studentStatus = "Good";
}
else if (grade === GradeStatus.C) {
    studentStatus = "Satisfactory";
}
else if (grade === GradeStatus.D) {
    studentStatus = "Needs Improvement";
}
else {
    studentStatus = "Unknown Grade";
}
if (studentDiv) {
    studentDiv.innerHTML = "\n      <p><strong>Student Name:</strong> ".concat(studentName, "</p>\n      <p><strong>Age:</strong> ").concat(age, "</p>\n      <p><strong>Status:</strong> <span class=\"").concat(studentStatus.toLowerCase().replace(/\s+/g, ''), "\">").concat(studentStatus, "</span></p>\n    ");
}
