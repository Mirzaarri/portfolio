// // Abstraction and Encapsulation Example
// class person {
//   constructor(fName, lName, address){
//     this.fName = fName;
//     this.lName = lName;
//     this.address = address;
//   }
//   travel(){
//     console.log(`${this.fName} wants to travel the world` );
//   }

//   fullName(){
//     console.log(`This is my full name ${this.fName} ${this.lName}`);
//   }

//   myAddress(){
//     console.log(`My home address is ${this.address}`);
//   }
// }

// const newPerson = new person('Arsalan', 'Mirza', 'Gulraiz 2');
// console.log(`My name is ${newPerson.fName} ${newPerson.lName} and I'm from ${newPerson.address}`);


// newPerson.travel();
// newPerson.fullName();
// newPerson.myAddress();


// class Person {
//   constructor(name, age) {
//       // These properties are considered private (convention)
//       this._name = name; // Convention: Prefix with an underscore
//       this._age = age;   // Convention: Prefix with an underscore
//   }

//   // Public method to get the person's name
//   getName() {
//       return this._name;
//   }

//   // Public method to set the person's age with validation
//   setAge(newAge) {
//       if (newAge >= 0) {
//           this._age = newAge;
//       } else {
//           console.log("Invalid age input");
//       }
//   }

//   // Public method to introduce the person
//   introduce() {
//       console.log(`Hello, my name is ${this._name} and I am ${this._age} years old.`);
//   }
// }

// // Create an instance of the Person class
// const person = new Person("Alice", 30);

// // Access and modify properties using public methods
// person.setAge(35); // Set the age
// console.log(person.getName()); // Get the name
// person.introduce(); // Introduce the person

class Circle {
  constructor(radius) {
      this._radius = radius; 
  }


  get radius() {
      return this._radius;
  }


  set radius(newRadius) {
      if (newRadius > 0) {
          this._radius = newRadius;
      } else {
          console.log("Invalid radius input");
      }
  }


  calculateArea() {
      return Math.PI * this._radius ** 2;
  }
}

const myCircle = new Circle(5);

console.log(myCircle.radius); 
myCircle.radius = 7; 
console.log(myCircle.radius); 
myCircle.radius = -3
console.log(myCircle.calculateArea());





// Abstraction: We define a class `Car` to abstract the essential properties and behaviors of a car.
// class Car {
//   constructor(make, model, year) {
//     // Encapsulation: Data (attributes) is encapsulated within the class.
//     this.make = make;     // Make of the car
//     this.model = model;   // Model of the car
//     this.year = year;     // Year of manufacture
//     this.speed = 0;       // Current speed (initially 0)
//   }

//   // Method to start the car
//   start() {
//     console.log(`${this.make} ${this.model} started.`);
//   }

//   // Method to accelerate the car
//   accelerate() {
//     this.speed += 10;
//     console.log(`Accelerating to ${this.speed} mph.`);
//   }

//   // Method to brake the car
//   brake() {
//     this.speed -= 5;
//     console.log(`Slowing down to ${this.speed} mph.`);
//   }

//   // Method to stop the car
//   stop() {
//     this.speed = 0;
//     console.log(`${this.make} ${this.model} stopped.`);
//   }
// }

// // Create an instance of the Car class
// const myCar = new Car('Toyota', 'Camry', 2022);

// // Accessing properties (Abstraction): We access the car's make, model, and year.
// console.log(`My car is a ${myCar.year} ${myCar.make} ${myCar.model}`);

// // Using methods (Abstraction and Encapsulation): We interact with the car by starting, accelerating, and stopping it.
// myCar.start();
// myCar.accelerate();
// myCar.brake();
// myCar.stop();
