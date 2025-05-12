enum Grade { //enum
  A = "Excellent",
  B = "Good",
  C = "Average",
  D = "Poor",
  F = "Fail"
}

type Student = [string, number, Grade]; //tuple

// 3. Array to hold multiple students
let students: Student[] = [];

// 4. Function to add a student
function addStudent(name: string, age: number, grade: Grade): void {
  const newStudent: Student = [name, age, grade];
  students.push(newStudent);
}

// 5. Function to display all students
function displayStudents(): void {
  console.log("Student Records:");
  students.forEach((student, index) => {
    console.log(
      `${index + 1}. Name: ${student[0]}, Age: ${student[1]}, Grade: ${student[2]}`
    );
  });
}

// 🏁 Let's use our functions!
addStudent("Thasni", 20, Grade.A);
addStudent("sainu", 19, Grade.B);
addStudent("Thanu", 22, Grade.C);

// Display all students
displayStudents();
