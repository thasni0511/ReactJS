// app.ts
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
});
