// display.ts

const studentDiv = document.getElementById('studentDetails') as HTMLDivElement;

// Read from localStorage
const studentDataString = localStorage.getItem('student');

if (studentDataString) {
  const student = JSON.parse(studentDataString);
  studentDiv.innerHTML = `
    <p><strong>Name:</strong> ${student.name}</p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Grade:</strong> ${student.grade}</p>
  `;
} else {
  studentDiv.innerHTML = "<p>No student data found.</p>";
}
