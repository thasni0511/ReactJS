// 2. Readonly User for admin
var admin = {
    name: "Admin",
    age: 40,
    email: "admin@relaxplzz.com"
};
// Now, `RequiredUser` will have all properties (`name`, `age`, `email`) required.
var requiredUserExample = {
    name: "Jane",
    age: 30,
    email: "jane@example.com" // `email` is now required
};
var userAgeRecord = {
    "Alice": 25,
    "Bob": 30
};
var userWithoutEmail = {
    name: "Mark",
    age: 22
};
var userNameAndAge = {
    name: "Sara",
    age: 28
};
var validEmail = "hello@domain.com"; // Must be a non-null string
// GreetUserReturnType is `void`, which is the return type of the `greetUser` function.
function greetUser(user) {
    var greetingDiv = document.getElementById('greetingMessage');
    greetingDiv.textContent = "Hi, ".concat(user.name, "! Your User Profile is Created: ");
    setTimeout(function () {
        greetingDiv.textContent = '';
    }, 2000);
}
var users = [];
var formElement = document.getElementById('userForm');
var userList = document.getElementById('userList');
if (formElement) {
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name');
        var ageInput = document.getElementById('age');
        var emailInput = document.getElementById('email');
        var newUser = {
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
    var adminItem = document.createElement('li');
    adminItem.innerHTML = "\n      <div class=\"user-row\">\n        <span class=\"user-name\">".concat(admin.name, "</span>\n        <span class=\"user-age\">Age: ").concat(admin.age, "</span>\n        <span class=\"user-email\">").concat(admin.email, "</span>\n        <span class=\"admin-placeholder\"></span> \n      </div>\n    ");
    adminItem.classList.add("admin-user");
    userList.appendChild(adminItem);
    // Display all users
    users.forEach(function (user, index) {
        var li = document.createElement('li');
        li.innerHTML = "\n        <div class=\"user-row\">\n          <span class=\"user-name\">".concat(user.name, "</span>\n          <span class=\"user-age\">Age: ").concat(user.age, "</span>\n          <span class=\"user-email\">").concat(user.email || 'No email provided', "</span>\n          <button class=\"delete-btn\">Delete</button>\n        </div>\n      ");
        var deleteButton = li.querySelector('.delete-btn');
        deleteButton.addEventListener('click', function () {
            if (confirm("Are you sure you want to delete: ".concat(user.name, "?"))) {
                users.splice(index, 1); // Remove user at current index
                renderUsers(); // Re-render the list
            }
        });
        userList.appendChild(li);
    });
}
renderUsers();
