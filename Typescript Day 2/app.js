// app.ts
<<<<<<< HEAD
// When form is submitted
var form = document.getElementById('studentForm');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent reload
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;
    if (name && age && grade) {
        // Save data to localStorage
        var studentData = { name: name, age: age, grade: grade };
        localStorage.setItem('student', JSON.stringify(studentData));
        // Redirect to display.html
        window.location.href = "display.html";
    }
=======
// Get the form element
var form = document.getElementById('studentForm');
// Form submit event
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;
    // Create a complete student object
    var studentData = { name: name, age: age, grade: grade };
    // Save each field separately in localStorage
    localStorage.setItem('studentName', studentData.name);
    localStorage.setItem('age', studentData.age);
    localStorage.setItem('grade', studentData.grade);
    // Redirect to display page
    window.location.href = 'display.html';
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
});
