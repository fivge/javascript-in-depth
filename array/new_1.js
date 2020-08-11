function User(name, age) {
  this.name = name;
  this.age = age;
}

let user = new User("foo", 12);

// let _new ()
let user1 = Object.create(User.prototype);
User.call(user1, "foo", 12);

console.log(
  user,
  user1,
  user == user1, // false
  Object.getPrototypeOf(user1) === User.prototype
);
