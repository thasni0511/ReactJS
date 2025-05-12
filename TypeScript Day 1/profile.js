function profile(name, age) {
    return {
        name: name,
        age: age
    };
}
function show(user) {
    console.log("Name: ".concat(user.name, ", Age: ").concat(user.age));
}
<<<<<<< HEAD
var user1 = profile("Jess", 25);
=======
var user1 = profile("Thasni", 25);
>>>>>>> f7498f6d34f9087b0cbf3465bfb540c0e79162c0
show(user1);
var user2 = profile("Thanu", 30);
show(user2);
