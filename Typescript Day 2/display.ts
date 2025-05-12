<<<<<<< HEAD
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
=======
// display.ts

enum GradeStatus {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
  }
  
  const studentDiv = document.getElementById('studentDetails') as HTMLElement;
  
  const studentName = localStorage.getItem('studentName');
  const age = localStorage.getItem('age');
  const grade = localStorage.getItem('grade');
  
  let studentStatus = "";
  
  if (grade === GradeStatus.F) {
    studentStatus = "Failed";
  } else if (grade === GradeStatus.A) {
    studentStatus = "Excellent";
  } else if (grade === GradeStatus.B) {
    studentStatus = "Good";
  } else if (grade === GradeStatus.C) {
    studentStatus = "Satisfactory";
  } else if (grade === GradeStatus.D) {
    studentStatus = "Needs Improvement";
  } else {
    studentStatus = "Unknown Grade";
  }
  
  if (studentDiv) {
    studentDiv.innerHTML = `
      <p><strong>Student Name:</strong> ${studentName}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Status:</strong> <span class="${studentStatus.toLowerCase().replace(/\s+/g, '')}">${studentStatus}</span></p>
    `;
  }
  
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
