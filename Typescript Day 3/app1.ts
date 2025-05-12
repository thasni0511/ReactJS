// 1. Define the User interface
interface User {
    name: string;
    age: number;
    email?: string; // optional
  }
  
  // 2. Readonly User for admin
  const admin: Readonly<User> = { 
    name: "Admin",
    age: 40,
    email: "admin@relaxplzz.com"
  };
  
  // Utility Types Examples
  
  // 3. Required - Ensure all properties are required
  type RequiredUser = Required<User>;
  // Now, `RequiredUser` will have all properties (`name`, `age`, `email`) required.
  
  const requiredUserExample: RequiredUser = {
    name: "Jane",
    age: 30,
    email: "jane@example.com" // `email` is now required
  };
  
  // 4. Record - Create a type where each key is a string, and the value is a number (UserName -> Age)
  type AgeRecord = Record<string, number>;
  const userAgeRecord: AgeRecord = {
    "Alice": 25,
    "Bob": 30
  };
  
  // 5. Omit - Create a new type by omitting the `email` property
  type UserWithoutEmail = Omit<User, 'email'>;
  const userWithoutEmail: UserWithoutEmail = {
    name: "Mark",
    age: 22
  };
  
  // 6. Pick - Pick only the `name` and `age` properties
  type UserNameAndAge = Pick<User, 'name' | 'age'>;
  const userNameAndAge: UserNameAndAge = {
    name: "Sara",
    age: 28
  };
  
  // 7. Exclude - Exclude `null` and `undefined` from a type
  type NonNullableUser = Exclude<User['email'], null | undefined>;
  const validEmail: NonNullableUser = "hello@domain.com"; // Must be a non-null string
  
  // 8. Parameters - Get the parameter types of the `greetUser` function
  type GreetUserParams = Parameters<typeof greetUser>;
  // GreetUserParams is now [User], which is the type of the parameter that `greetUser` expects.
  
  // 9. ReturnType - Get the return type of `greetUser`
  type GreetUserReturnType = ReturnType<typeof greetUser>;
  // GreetUserReturnType is `void`, which is the return type of the `greetUser` function.
  
  
  function greetUser(user: User): void {
    const greetingDiv = document.getElementById('greetingMessage') as HTMLDivElement;
    greetingDiv.textContent = `Hi, ${user.name}! Your User Profile is Created: `;
    
    setTimeout(() => {
      greetingDiv.textContent = '';
    }, 2000);
  }
  
  const users: User[] = [];
  
  const formElement = document.getElementById('userForm') as HTMLFormElement;
  const userList = document.getElementById('userList') as HTMLUListElement;
  
  if (formElement) {
    formElement.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const ageInput = document.getElementById('age') as HTMLInputElement;
      const emailInput = document.getElementById('email') as HTMLInputElement;
  
      const newUser: User = {
        name: nameInput.value,
        age: parseInt(ageInput.value),
      };
  
      if (emailInput.value) {
        newUser.email = emailInput.value;
      }
  
      users.push(newUser);
      greetUser(newUser);
      renderUsers();
      formElement.reset();
    });
  }
  
  function renderUsers() {
    userList.innerHTML = '';
  
    // Admin (Readonly)
    const adminItem = document.createElement('li');
    adminItem.innerHTML = `
      <div class="user-row">
        <span class="user-name">${admin.name}</span>
        <span class="user-age">Age: ${admin.age}</span>
        <span class="user-email">${admin.email}</span>
        <span class="admin-placeholder"></span> 
      </div>
    `;
    adminItem.classList.add("admin-user");
    userList.appendChild(adminItem);
  
    // Display all users
    users.forEach((user, index) => {
      const li = document.createElement('li');
  
      li.innerHTML = `
        <div class="user-row">
          <span class="user-name">${user.name}</span>
          <span class="user-age">Age: ${user.age}</span>
          <span class="user-email">${user.email || 'No email provided'}</span>
          <button class="delete-btn">Delete</button>
        </div>
      `;
      
      const deleteButton = li.querySelector('.delete-btn') as HTMLButtonElement;
      deleteButton.addEventListener('click', () => {
        if (confirm(`Are you sure you want to delete: ${user.name}?`)) {
          users.splice(index, 1); // Remove user at current index
          renderUsers(); // Re-render the list
        }
      });
  
      userList.appendChild(li);
    });
  }
  
  renderUsers();
  