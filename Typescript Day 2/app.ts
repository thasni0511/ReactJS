<<<<<<< HEAD
// app.ts

// When form is submitted
const form = document.getElementById('studentForm') as HTMLFormElement;

form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent reloading of the current page

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const age = (document.getElementById('age') as HTMLInputElement).value;
  const grade = (document.getElementById('grade') as HTMLSelectElement).value;

  if (name && age && grade) {
    // Save data to localStorage
    const studentData = { name, age, grade };
    localStorage.setItem('student', JSON.stringify(studentData));

    // Redirect to display.html
    window.location.href = "display.html";
  }
});
=======
// app.ts

interface Student {
    name: string;
    age: string;
    grade: string;
  }
  
  type CompleteStudent = Required<Student>;
  
  (function () {
    const formElement = document.getElementById('studentForm') as HTMLFormElement;
  
    if (formElement) {
      formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const age = (document.getElementById('age') as HTMLInputElement).value;
        const grade = (document.getElementById('grade') as HTMLSelectElement).value;
  
        const studentData: CompleteStudent = { name, age, grade }; 
  
        localStorage.setItem('studentName', studentData.name);
        localStorage.setItem('age', studentData.age);
        localStorage.setItem('grade', studentData.grade);
  
        window.location.href = 'display.html';
      });
    }
  })();
  
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
