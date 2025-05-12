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
