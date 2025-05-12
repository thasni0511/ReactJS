// app.ts
(function () {
    var formElement = document.getElementById('studentForm');
    if (formElement) {
        formElement.addEventListener('submit', function (event) {
            event.preventDefault();
            var name = document.getElementById('name').value;
            var age = document.getElementById('age').value;
            var grade = document.getElementById('grade').value;
            var studentData = { name: name, age: age, grade: grade };
            localStorage.setItem('studentName', studentData.name);
            localStorage.setItem('age', studentData.age);
            localStorage.setItem('grade', studentData.grade);
            window.location.href = 'display.html';
        });
    }
})();
