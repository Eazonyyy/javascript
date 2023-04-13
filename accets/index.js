function User(firstName, lastName, gender, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.age = age;
  
  this.fullName = function() {
    return this.firstName + ' ' + this.lastName;
  }
  
  this.speak = function() {
    console.log('Hello, my name is ' + this.fullName() + '.');
  }
}

const user1 = new User('Петро', 'Іваненко', 'чоловік', 30);

console.log(user1.fullName()); // 'Петро Іваненко'

user1.speak(); // 'Hello, my name is Петро Іваненко.'
