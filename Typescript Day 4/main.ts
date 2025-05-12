<<<<<<< HEAD
// Notes : Interface: describes what properties and methods a Person should have
=======
// Interface: describes what properties and methods a Person should have
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
interface Inter_Person {
  name: string;
  age: number;
  PersonId: number;
  getSalary(): number; // Only method, no direct salary property exposed
}

// Class implementing the interface
class Person implements Inter_Person {
  protected salary: number; // Accessible to Person and subclasses

  constructor(
    public name: string,
    public age: number,
    public PersonId: number,
    salary: number
  ) {
    this.salary = salary;
  }

  public getSalary(): number {
    return this.salary;
  }
}

// Subclass Employee extends Person and adds incentives
class Employee extends Person {
  private incentives: number; // Only accessible inside Employee

  constructor(
    name: string,
    age: number,
    PersonId: number,
    salary: number,
    incentives: number
  ) {
<<<<<<< HEAD
    super(name, age, PersonId, salary); // calls super() to initialize the parent class properties.

=======
    super(name, age, PersonId, salary); // Call parent constructor
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
    this.incentives = incentives;
  }

  getTotalSalary(): number {
    return this.getSalary() + this.incentives;
  }

<<<<<<< HEAD
  showDetails(): string { //method returns a formatted HTML string showing all the employee details.
=======
  showDetails(): string {
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
    return `
      Name: ${this.name}<br>
      Age: ${this.age}<br>
      Person ID: ${this.PersonId}<br>
      Salary: ₹${this.getSalary()}<br>
      Incentives: ₹${this.incentives}<br>
      <strong>Total Salary: ₹${this.getTotalSalary()}</strong>
    `;
  }
}

// Database of users
const PersonDB: { [username: string]: { password: string, Person: Employee } } = {
  "thanu123": {
    password: "1234",
    Person: new Employee("Thanu Thasim", 30, 101, 15000, 800)
  },
  "sarah123": {
    password: "12345",
    Person: new Employee("Sarah Cherian", 28, 102, 25000, 1000)
  }
};

// Login function
function login() {
  const username = (document.getElementById("username") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;

  const record = PersonDB[username];
<<<<<<< HEAD
  if (record && record.password === password) { //Look up the entered username in the PersonDB and Check if the record exists and the password matches.
=======
  if (record && record.password === password) {
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
    const emp = record.Person;
    document.getElementById("loginForm")!.style.display = "none";
    const outputDiv = document.getElementById("employeeDetails")!;
    outputDiv.style.display = "block";
    (document.getElementById("detailsText") as HTMLElement).innerHTML = emp.showDetails();
  } else {
    alert("Invalid username or password.");
  }
}

// Attach login function to button after DOM is loaded
<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => { //finished reading and building the basic HTML of the page.
=======
document.addEventListener("DOMContentLoaded", () => {
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
  document.getElementById("loginButton")?.addEventListener("click", login);
});
