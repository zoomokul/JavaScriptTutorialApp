// chapters.js

export const chapters = [
    {
      title: "Chapter 1: Introduction to JavaScript",
      content: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>JavaScript Introduction</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 20px;
                  padding: 20px;
                  background-color: #f0f0f0;
              }
              h1 {
                  color: #333;
              }
              h2 {
                  color: #333;
              }
              p {
                  color: #555;
              }
              code {
                  background-color: #f5f5f5;
                  padding: 2px 4px;
                  border: 1px solid #ccc;
              }
              pre {
                  background-color: #f5f5f5;
                  padding: 10px;
                  border: 1px solid #ccc;
                  overflow-x: auto;
              }
          </style>
      </head>
      <body>
          <h1>Chapter 1: Introduction to JavaScript</h1>
          <p><strong>What is JavaScript?</strong></p>
          <p>JavaScript is a programming language that is used to create interactive web pages and web applications. It is also used in mobile apps, desktop apps, and server-side applications. JavaScript is a lightweight language that is easy to learn, but it is also powerful enough to create complex applications.</p>
      
          <p><strong>Why learn JavaScript?</strong></p>
          <p>JavaScript is one of the most popular programming languages in the world. It is used by millions of developers to create web pages, web applications, and mobile apps. Learning JavaScript will open up many opportunities for you in the tech industry.</p>
      
          <p><strong>How to use JavaScript</strong></p>
          <p>JavaScript can be used in a variety of ways. It can be embedded in HTML pages, or it can be used in Node.js, a JavaScript runtime environment that can be used to create server-side applications.</p>
      
          <p><strong>Writing JavaScript code</strong></p>
          <p>JavaScript code is written in text files with the .js extension. These files can be saved and then opened in a web browser or in a JavaScript IDE (integrated development environment).</p>
      
          <p><strong>Running JavaScript code</strong></p>
          <p>JavaScript code can be run in a web browser or in a Node.js runtime environment. To run JavaScript code in a web browser, you simply need to add the code to an HTML page and then open the page in a browser. To run JavaScript code in Node.js, you need to start a Node.js server and then run the code in the terminal.</p>
      
          <p><strong>Variables and data types in JavaScript</strong></p>
          <p>Variables are used to store data in JavaScript. Data types define the type of data that can be stored in a variable. JavaScript has six primitive data types:</p>
          <ul>
              <li><strong>String:</strong> Stores text data.</li>
              <li><strong>Number:</strong> Stores numeric data.</li>
              <li><strong>Boolean:</strong> Stores true or false values.</li>
              <li><strong>Null:</strong> Stores a value that is not defined.</li>
              <li><strong>Undefined:</strong> Stores a value that has not yet been assigned.</li>
              <li><strong>Object:</strong> Stores complex data structures.</li>
          </ul>
      
          <pre><code>
      // Example JavaScript code
      var myName = "John Doe";
      var myAge = 30;
      var isRaining = false;
      
      console.log(myName); // Outputs "John Doe"
      
      var sum = myAge + 10;
      
      if (isRaining) {
        console.log("It is raining! Bring an umbrella.");
      } else {
        console.log("It is not raining.");
      }
          </code></pre>
      
          <p><strong>Objects in JavaScript</strong></p>
          <p>Objects are used to store complex data structures, such as arrays and dictionaries. Objects are created using curly braces ({ }).</p>
      
          <pre><code>
      // Example JavaScript code
      var myObject = {
        name: "John Doe",
        age: 30,
        occupation: "Software Engineer"
      };
      
      console.log(myObject.name); // Outputs "John Doe"
      
      myObject.hobbies = ["Coding", "Playing guitar"];
      delete myObject.occupation;
          </code></pre>
      
          <p><strong>Operators in JavaScript</strong></p>
          <p>JavaScript has a variety of operators that can be used to perform operations on data. Some common operators include:</p>
          <ul>
              <li>Arithmetic operators: +, -, *, /, %</li>
              <li>Comparison operators: ==, !=, &lt;, &gt;, &lt;=, &gt;=</li>
              <li>Logical operators: &amp;&amp;, ||, !</li>
              <li>Assignment operators: =, +=, -=, *=, /=, %=</li>
          </ul>
      
          <pre><code>
      // Example JavaScript code
      var sum = 10 + 20;
      var isGreater = 10 > 20;
      var isTrue = true &amp;&amp; false;
      myAge = 30;
          </code></pre>
      
          <p><strong>Conditional statements in JavaScript</strong></p>
          <p>Conditional statements allow you to execute different code depending on the value of a condition. The two most common conditional statements in JavaScript are if statements and else if statements.</p>
      
          <pre><code>
      // Example JavaScript code
      var number = 10;
      
      if (number % 2 === 0) {
        console.log("The number is even.");
      } else {
        console.log("The number is odd.");
      }
          </code></pre>
      
          <p><strong>Loops in JavaScript</strong></p>
          <p>Loops allow you to repeat a block of code a certain number of times. The two most common loops in JavaScript are for loops and while loops.</p>
      
          <p><strong>For loops</strong></p>
          <p>For loops are used to repeat a block of code a fixed number of times. The syntax for a for loop is as follows:</p>
      
          <pre><code>
      // Example JavaScript code
      for (var i = 1; i &lt;= 10; i++) {
        console.log(i);
      }
          </code></pre>
      
          <p><strong>While loops</strong></p>
          <p>While loops are used to repeat a block of code while a condition is true. The syntax for a while loop is as follows:</p>
      
          <pre><code>
      // Example JavaScript code
      var i = 1;
      while (i &lt;= 10) {
        console.log(i);
        i++;
      }
          </code></pre>
      
          <p><strong>Do...while loops</strong></p>
          <p>Do...while loops are similar to while loops, but they execute the code block at least once, even if the condition is false. The syntax for a do...while loop is as follows:</p>
      
          <pre><code>
      // Example JavaScript code
      var i = 1;
      do {
        console.log(i);
        i++;
      } while (i &lt;= 10);
          </code></pre>
      
          <p><strong>Nested loops</strong></p>
          <p>Nested loops are loops that are placed inside of other loops. This can be useful for iterating over multiple data structures.</p>
      
          <pre><code>
      // Example JavaScript code
      for (var i = 1; i &lt;= 10; i++) {
        for (var j = 1; j &lt;= 10; j++) {
          console.log(i * j);
        }
      }
          </code></pre>
      
          <p><strong>Break and continue statements</strong></p>
          <p>The break statement can be used to exit a loop early. The continue statement can be used to skip to the next iteration of a loop.</p>
      
          <pre><code>
      // Example JavaScript code
      for (var i = 1; i &lt;= 10; i++) {
        if (i % 2 === 0) {
          break;
        }
      
        console.log(i);
      }
          </code></pre>
      
          <h2>Conclusion</h2>
          <p>Loops are a powerful tool that can be used to automate repetitive tasks. By understanding how to use loops, you can write more efficient and effective JavaScript code.</p>
      </body>
      </html>
      `,
    },
    {
      title: "Chapter 2: Object-Oriented JavaScript",
      content: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Object-Oriented JavaScript</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 20px;
                  background-color: #F0F0F0;
              }
      
              h1, h2 {
                  color: #3498db; /* Light blue color for headings */
              }
      
              .container {
                  max-width: 800px;
                  margin: 0 auto;
                  background-color: #fff;
                  padding: 20px;
                  border-radius: 8px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
      
              .code {
                  background-color: #f2f2f2;
                  padding: 10px;
                  border-radius: 4px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <h1>Chapter 2: Object-Oriented JavaScript</h1>
              <p>Object-oriented programming (OOP) is a programming paradigm that uses objects to model real-world entities. Objects are self-contained units of data and code that can interact with each other.</p>
              
              <h2>Classes and objects</h2>
              <p>Classes are blueprints for creating objects. Objects are instances of classes.</p>
              <div class="code">
                  <pre><code>
      // Create a class for cars
      class Car {
        constructor(make, model, year) {
          this.make = make;
          this.model = model;
          this year = year;
        }
      
        drive() {
          console.log("The car is driving.");
        }
      }
      
      // Create an object of the Car class
      var myCar = new Car("Toyota", "Camry", 2023);
      
      // Call the drive() method on the myCar object
      myCar.drive();
                  </code></pre>
              </div>
      
              <h2>Inheritance</h2>
              <p>Inheritance allows you to create new classes that are based on existing classes. This allows you to reuse code and create more complex and specialized objects.</p>
              <div class="code">
                  <pre><code>
      // Create a class for electric cars
      class ElectricCar extends Car {
        constructor(make, model, year, batteryRange) {
          super(make, model, year);
          this.batteryRange = batteryRange;
        }
      
        chargeBattery() {
          console.log("The electric car is charging.");
        }
      }
      
      // Create an object of the ElectricCar class
      var myElectricCar = new ElectricCar("Tesla", "Model S", 2023, 400);
      
      // Call the chargeBattery() method on the myElectricCar object
      myElectricCar.chargeBattery();
                  </code></pre>
              </div>
      
              <h2>Polymorphism</h2>
              <p>Polymorphism allows you to treat objects of different types in a similar way.</p>
              <div class="code">
                  <pre><code>
      // Define a function that takes an object as an argument
      function drive(vehicle) {
        vehicle.drive();
      }
      
      // Call the drive() function with a Car object
      drive(myCar);
      
      // Call the drive() function with an ElectricCar object
      drive(myElectricCar);
                  </code></pre>
              </div>
      
              <h2>Encapsulation</h2>
              <p>Encapsulation is the practice of hiding the implementation details of an object from the outside world. This makes the object more robust and easier to maintain.</p>
              <div class="code">
                  <pre><code>
      // Create a class for cars
      class Car {
        constructor(make, model, year) {
          this.make = make;
          this.model = model;
          this year = year;
      
          // Private method
          this._startEngine = function() {
            // ...
          };
        }
      
        // Public method
        startEngine() {
          this._startEngine();
        }
      }
      
      // Create an object of the Car class
      var myCar = new Car("Toyota", "Camry", 2023);
      
      // Call the startEngine() method on the myCar object
      myCar.startEngine();
                  </code></pre>
              </div>
      
              <h2>Benefits of object-oriented programming</h2>
              <p>Object-oriented programming offers a number of benefits, including:</p>
              <ul>
                  <li>Reusability: Objects can be reused in different parts of a program, which can save time and effort.</li>
                  <li>Maintainability: Object-oriented code is easier to maintain and update because the implementation details are hidden from the outside world.</li>
                  <li>Scalability: Object-oriented programs can be scaled up or down more easily than procedural programs.</li>
              </ul>
      
              <h2>Conclusion</h2>
              <p>Object-oriented programming is a powerful paradigm that can be used to create complex and efficient software applications. By understanding the basics of OOP, you can write more reusable, maintainable, and scalable code.</p>
          </div>
      </body>
      </html>
      `,
    },
    {
      title: "Chapter 3: Advanced JavaScript",
      content: `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 3: Advanced JavaScript</title>
</head>
<body>
    <h1>Chapter 3: Advanced JavaScript</h1>

    <h2>Modules</h2>
    <p>Modules allow you to organize your code into reusable units. This makes your code easier to read, maintain, and reuse.</p>
    <p>To create a module, you use the <code>export</code> keyword to export the functions and variables that you want to be accessible outside of the module. To import a module, you use the <code>import</code> keyword.</p>
    <pre><code>
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
    </code></pre>
    <p>You can then import this module into another file like this:</p>
    <pre><code>
import { add, subtract } from './math.js';

const sum = add(1, 2);
const difference = subtract(3, 4);

console.log(sum); // Outputs 3
console.log(difference); // Outputs -1
    </code></pre>
    <p>Modules are a powerful way to organize your code and make it more reusable.</p>

    <h2>Events</h2>
    <p>Events allow you to respond to user actions and other events in your program.</p>
    <p>For example, you can use events to respond to button clicks, mouse movements, or keyboard presses.</p>
    <p>To register for an event, you use the <code>addEventListener()</code> method. To remove an event listener, you use the <code>removeEventListener()</code> method.</p>
    <pre><code>
const button = document.getElementById('my-button');

button.addEventListener('click', function() {
  console.log('The button was clicked!');
});
    </code></pre>
    <p>When the button is clicked, the event listener will be called and the <code>console.log()</code> statement will be executed.</p>
    <p>Events are a powerful way to make your programs more interactive and responsive.</p>

    <h2>Promises</h2>
    <p>Promises allow you to handle asynchronous operations. Asynchronous operations are operations that don't complete immediately.</p>
    <p>For example, making a network request is an asynchronous operation. The request may take some time to complete, depending on the network connection.</p>
    <p>Promises allow you to wait for asynchronous operations to complete before you continue executing your code.</p>
    <pre><code>
const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://example.com/api/data');
  xhr.onload = function() {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(new Error('The request failed.'));
    }
  };

  xhr.send();
});

promise.then(response => {
  // The request was successful.
  // Do something with the response data.
})
.catch(error => {
  // The request failed.
  // Handle the error.
});
    </code></pre>
    <p>Promises are a powerful way to handle asynchronous operations in a clean and concise way.</p>

    <h2>Regular Expressions</h2>
    <p>Regular expressions allow you to search and manipulate text.</p>
    <p>Regular expressions are patterns that can be used to match text.</p>
    <p>For example, the following regular expression matches the word "cat":</p>
    <pre><code>/cat/</code></pre>
    <p>You can use regular expressions to search for and replace text, extract data from text, and validate text.</p>
    <pre><code>
const text = 'This is my email address: john.doe@example.com.';

const emailRegex = /[^@]+@[^@]+/g;

const emailAddresses = text.match(emailRegex);

console.log(emailAddresses); // Outputs ["john.doe@example.com"]
    </code></pre>
    <p>Regular expressions are a powerful tool for text processing.</p>

    <h2>Web APIs</h2>
    <p>Web APIs allow you to interact with the browser and the underlying operating system.</p>
    <p>Web APIs allow you to do things like display alerts, make network requests, and access the user's location.</p>
    <pre><code>
alert('Hello, world!');
    </code></pre>
    <p>Web APIs are a powerful way to extend the functionality of your web applications.</p>

    <h2>Conclusion</h2>
    <p>In this chapter, we covered some advanced JavaScript topics, such as modules, events, promises, regular expressions, and Web APIs. By understanding these topics,</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://github.com/Dwaylan/JS211_HW3">GitHub Repository</a></li>
    </ul>
</body>
</html>

      `,
    },
    {
      title: "Chapter 4: Classes and Objects",
      content: `
     <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 4: Classes and Objects</title>
</head>
<body>
    <h1>Chapter 4: Classes and Objects</h1>

    <p>Classes and objects are two of the most important concepts in object-oriented programming (OOP). OOP is a programming paradigm that allows you to model real-world objects and their interactions in code.</p>

    <p>Classes are blueprints for creating objects. They define the properties and methods that objects of that class will have.</p>

    <p>Objects are instances of classes. They have the properties and methods that are defined in the class they were instantiated from.</p>

    <h2>Example:</h2>
    <pre><code>
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
   <p> console.log('Hello, my name is ${this.name} and I am ${this.age} years old.');}
}

// Instantiate a new Person object
const johnDoe = new Person('John Doe', 30);

// Call the greet() method on the johnDoe object
johnDoe.greet();

<b>Output:</b>
Hello, my name is John Doe and I am 30 years old.
    </code></pre>

    <h2>Inheritance</h2>
    <p>Inheritance is a feature of OOP that allows you to create new classes based on existing classes. This allows you to reuse code and create more complex and specialized objects.</p>

    <h2>Example:</h2>
    <pre><code>
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  study() {
    console.log("${this.name} is studying ${this.major}.");
  }
}

// Instantiate a new Student object
const janeDoe = new Student('Jane Doe', 25, 'Computer Science');

// Call the greet() and study() methods on the janeDoe object
janeDoe.greet();
janeDoe.study();

<b>Output:</b>
Hello, my name is Jane Doe and I am 25 years old.
Jane Doe is studying Computer Science.
    </code></pre>

    <h2>Polymorphism</h2>
    <p>Polymorphism is a feature of OOP that allows objects of different classes to respond to the same method call in different ways. This is achieved by overriding methods in subclasses.</p>

    <h2>Example:</h2>
    <pre><code>
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('(generic animal sound)');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}

class Cat extends Animal {
  makeSound() {
    console.log('Meow!');
  }
}

// Instantiate a new Dog and Cat object
const fido = new Dog('Fido');
const felix = new Cat('Felix');

// Call the makeSound() method on the fido and felix objects
fido.makeSound();
felix.makeSound();

<b>Output:</b>
Woof!
Meow!
    </code></pre>

    <p>Classes and objects are a powerful way to organize your code and make it more reusable and maintainable. By understanding these concepts, you can write more efficient and effective JavaScript code.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://github.com/Dai0526/Algorithm">GitHub Repository 1</a></li>
        <li><a href="https://github.com/Crypt00o/GDSC-Backend">GitHub Repository 2</a></li>
        <li><a href="https://github.com/yuancong-liu/portfolio-site">GitHub Repository 3</a></li>
    </ul>
</body>
</html>

      
      `,
    },
    {
      title: "Chapter 5: Functions",
      content: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 5: Functions</title>
</head>
<body>
    <h1>Chapter 5: Functions</h1>

    <p>Functions are reusable blocks of code that can be called upon from anywhere in your program. They can take parameters and return values.</p>

    <h2>Example:</h2>
    <pre><code>
function add(a, b) {
  return a + b;
}

const sum = add(1, 2);

console.log(sum); // Outputs 3
    </code></pre>

    <p>Functions can also be nested, meaning that one function can call another function.</p>

    <h2>Example:</h2>
    <pre><code>
function greet(name) {
  console.log("Hello, ${this.name}!");

  sayGoodbye(name);
}

function sayGoodbye(name) {
  console.log('Goodbye, ${this.name}!');
}

greet('John Doe');

<b>Output:</b>
Hello, John Doe!
Goodbye, John Doe!
    </code></pre>

    <p>Functions can also be anonymous, meaning that they do not have a name. Anonymous functions are often used as callbacks.</p>

    <h2>Example:</h2>
    <pre><code>
const callback = function() {
  console.log('Hello, world!');
};

setTimeout(callback, 2000);

The setTimeout() function takes a callback function as its argument and executes it after a specified delay. In this case, the callback function will be executed after 2 seconds.
    </code></pre>

    <h2>Higher-order functions</h2>
    <p>Higher-order functions are functions that can take other functions as parameters or return functions as values.</p>

    <h2>Example:</h2>
    <pre><code>
function map(array, callback) {
  const newArray = [];

  for (const element of array) {
    newArray.push(callback(element));
  }

  return newArray;
}

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = map(numbers, function(number) {
  return number * 2;
});

console.log(doubledNumbers); // Outputs [2, 4, 6, 8, 10]
    </code></pre>

    <p>The map() function takes an array and a callback function as parameters. The callback function is executed for each element of the array, and the results are returned as a new array.</p>

    <h2>Closures</h2>
    <p>Closures are functions that have access to the variables in the scope in which they were created, even after the scope in which they were created has closed.</p>

    <h2>Example:</h2>
    <pre><code>
function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // Outputs 1
console.log(counter()); // Outputs 2
console.log(counter()); // Outputs 3
    </code></pre>

    <p>The createCounter() function returns a function that has access to the count variable. Even though the createCounter() function has closed, the returned function can still access the count variable.</p>

    <h2>Arrow functions</h2>
    <p>Arrow functions are a concise way to write function expressions.</p>

    <h2>Example:</h2>
    <pre><code>
// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const add = (a, b) => a + b;
    </code></pre>

    <p>Arrow functions are often used in combination with higher-order functions and closures.</p>

    <h2>Conclusion</h2>
    <p>Functions are a powerful tool that can be used to make your code more reusable, maintainable, and efficient. By understanding the concepts in this chapter, you can write better JavaScript code.</p>
</body>
</html>

      
      `,
    },
     {
      title: "Chapter 6: Arrays and Objects in JavaScript:",
      content: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 6: Arrays and Objects in JavaScript</title>
</head>
<body>
    <h1>Chapter 6: Arrays and Objects in JavaScript</h1>

    <h2>Arrays</h2>
    <p>Arrays are ordered collections of data. They can store any type of data, including numbers, strings, booleans, objects, and other arrays.</p>
    <p>To create an array, you use the [] brackets. You can also use the new Array() constructor.</p>
    <pre><code>
const numbers = [1, 2, 3, 4, 5];
    </code></pre>
    <p>You can access the elements of an array using their index. The index of the first element is 0.</p>
    <pre><code>
const secondNumber = numbers[1]; // Outputs 2
    </code></pre>
    <p>You can also use the length property to get the number of elements in an array.</p>
    <pre><code>
console.log(numbers.length); // Outputs 5
    </code></pre>
    <p>Arrays have a number of built-in methods that can be used to manipulate their contents. Some of the most common methods include:</p>
    <ul>
        <li><code>push()</code>: Adds an element to the end of the array.</li>
        <li><code>pop()</code>: Removes the last element from the array.</li>
        <li><code>shift()</code>: Removes the first element from the array.</li>
        <li><code>unshift()</code>: Adds an element to the beginning of the array.</li>
        <li><code>slice()</code>: Returns a new array containing a subset of the elements of the original array.</li>
        <li><code>splice()</code>: Removes or replaces elements of the array.</li>
    </ul>

    <h2>Objects</h2>
    <p>Objects are collections of data that are stored in key-value pairs. The keys can be strings or numbers. The values can be any type of data, including numbers, strings, booleans, arrays, and other objects.</p>
    <p>To create an object, you use the {} curly braces. You can also use the new Object() constructor.</p>
    <pre><code>
const person = {
  name: 'John Doe',
  age: 30
};
    </code></pre>
    <p>You can access the properties of an object using their keys.</p>
    <pre><code>
const name = person.name; // Outputs 'John Doe'
    </code></pre>
    <p>You can also use the in operator to check if a property exists on an object.</p>
    <pre><code>
if ('age' in person) {
  // The age property exists.
}
    </code></pre>
    <p>Objects have a number of built-in methods that can be used to manipulate their contents. Some of the most common methods include:</p>
    <ul>
        <li><code>Object.keys()</code>: Returns an array containing the keys of the object.</li>
        <li><code>Object.values()</code>: Returns an array containing the values of the object.</li>
        <li><code>Object.entries()</code>: Returns an array of arrays, where each inner array contains a key-value pair from the object.</li>
        <li><code>Object.assign()</code>: Copies the properties of one object to another object.</li>
        <li><code>Object.freeze()</code>: Prevents the properties of an object from being changed.</li>
    </ul>

    <h2>Arrays and Objects Together</h2>
    <p>Arrays and objects can be used together to store and manipulate complex data structures. For example, you could use an array to store a list of objects, or you could use an object to store an array of values.</p>
    <pre><code>
const students = [
  {
    name: 'John Doe',
    age: 30
  },
  {
    name: 'Jane Doe',
    age: 25
  }
];

// Access the name of the first student.
const studentName = students[0].name; // Outputs 'John Doe'

// Add a new student to the array.
students.push({
  name: 'Peter Parker',
  age: 20
});

// Iterate over the array and print the name of each student.
for (const student of students) {
  console.log(student.name);
}
    </code></pre>

    <h2>Conclusion</h2>
    <p>Arrays and objects are two of the most important data structures in JavaScript. By understanding these data structures, you can write more efficient and effective JavaScript code.</p>
</body>
</html>

      
      `,
    },
    {
      title: "Chapter 7: Asynchronous Programming",
      content: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 7: Asynchronous Programming</title>
</head>
<body>
    <h1>Chapter 7: Asynchronous Programming</h1>

    <p>Asynchronous programming is a technique that allows your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.</p>

    <p>JavaScript is a single-threaded language, which means that it can only execute one task at a time. However, JavaScript can use asynchronous programming to handle multiple tasks at the same time.</p>

    <h2>Callbacks</h2>
    <p>Callbacks are functions that are passed to another function as an argument. The other function will call the callback function when the asynchronous operation has completed.</p>
    <pre><code>
function makeRequest(url, callback) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      callback(xhr.responseText);
    } else {
      callback(new Error('The request failed.'));
    }
  };

  xhr.send();
}

makeRequest('https://example.com/api/data', function(response) {
  // The request has completed.
  // Do something with the response data.
});
    </code></pre>

    <h2>Promises</h2>
    <p>Promises are objects that represent the eventual completion or failure of an asynchronous operation.</p>
    <p>To create a promise, you use the new Promise() constructor. To handle the promise, you use the then() and catch() methods.</p>
    <p>The then() method is used to handle the successful completion of the promise. The catch() method is used to handle the failure of the promise.</p>
    <pre><code>
const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://example.com/api/data');
  xhr.onload = function() {
    if (xhr.status === 200) {
      resolve(xhr.responseText);
    } else {
      reject(new Error('The request failed.'));
    }
  };

  xhr.send();
});

promise.then(response => {
  // The request has completed successfully.
  // Do something with the response data.
})
.catch(error => {
  // The request failed.
  // Handle the error.
});
    </code></pre>

    <h2>Async/await</h2>
    <p>Async/await is a syntax that makes it easier to write asynchronous code. Async/await allows you to write asynchronous code in a way that looks like synchronous code.</p>
    <p>To use async/await, you must first mark a function as async. You can then use the await keyword to wait for the completion of an asynchronous operation.</p>
    <pre><code>
async function makeRequest(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const data = await makeRequest('https://example.com/api/data');

// The request has completed successfully and the data is stored in the data variable.
    </code></pre>

    <h2>Conclusion</h2>
    <p>Asynchronous programming is an essential technique for writing efficient and responsive JavaScript code. By understanding the concepts in this chapter, you can write better JavaScript code.</p>

    <h2>Sources</h2>
    <ul>
        <li><a href="https://github.com/gabriel-cacayan/js-cheatsheet">GitHub Repository (MIT License)</a></li>
    </ul>
</body>
</html>

      
      `,
    },
     {
      title: "Chapter 9: Testing in JavaScript",
      content: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chapter 9: Testing in JavaScript</title>
</head>
<body>
    <h1>Chapter 9: Testing in JavaScript</h1>

    <p>Testing is the process of verifying that your program works as expected. It is important to test your program thoroughly to prevent errors and ensure that it meets your requirements.</p>

    <h2>Types of Testing</h2>
    <p>There are two main types of testing: unit testing and integration testing.</p>

    <h3>Unit Testing</h3>
    <p>Unit testing is the process of testing individual units of code, such as functions or classes. Unit tests are typically small and focused on testing a single unit of code.</p>
    <p>To write a unit test, you use a testing framework such as Jest or Mocha. These frameworks provide a number of features that make it easy to write and execute unit tests.</p>
    <pre><code>
// Function to add two numbers
function add(a, b) {
  return a + b;
}

// Unit test for the add() function
test('add() should add two numbers correctly', () => {
  expect(add(1, 2)).toBe(3);
});
    </code></pre>
    <p>This unit test will pass if the <code>add()</code> function returns the correct result when passed the numbers 1 and 2.</p>

    <h3>Integration Testing</h3>
    <p>Integration testing is the process of testing how different units of code work together. Integration tests are typically larger and more complex than unit tests, and they may involve testing multiple units of code at the same time.</p>
    <pre><code>
// Function to make an HTTP request
async function makeRequest(url) {
  const response = await fetch(url);
  return response.json();
}

// Integration test for the makeRequest() function
test('makeRequest() should return the correct data', async () => {
  const data = await makeRequest('https://example.com/api/data');

  expect(data).toEqual({
    name: 'John Doe',
    age: 30
  });
});
    </code></pre>
    <p>This integration test will pass if the <code>makeRequest()</code> function returns the correct data when passed the URL <code>https://example.com/api/data</code>.</p>

    <h2>Conclusion</h2>
    <p>Testing is an important part of the software development process. By understanding the concepts in this chapter, you can write better JavaScript code.</p>

    <h2>Additional Tips for Testing JavaScript Code</h2>
    <ul>
        <li>Write tests before you write the code that you are testing. This will help you to think about the design of your code and to identify potential problems early on.</li>
        <li>Write small, focused tests. This will make your tests easier to write and maintain.</li>
        <li>Use a testing framework such as Jest or Mocha. These frameworks provide a number of features that make it easy to write and execute tests.</li>
        <li>Run your tests regularly. This will help you to identify errors as soon as possible.</li>
    </ul>
</body>
</html>

      `,
    },
  ];
  