// let time = document.querySelector("#time");

// let data = new Date();
// console.log(data)

let question = document.querySelector("#question");
let ans1 = document.querySelector("#ans1");
let ans2 = document.querySelector("#ans2");
let ans3 = document.querySelector("#ans3");
let ans4 = document.querySelector("#ans4");
// let opt2 = document.querySelector("#opt2");
// let opt3 = document.querySelector("#opt3");
// let opt4 = document.querySelector("#opt4");
// let next = document.querySelector("#next");
// console.log(question.innerHTML);
// console.log(ans4.innerHTML);

// console.table([question,opt1,opt2,opt3,opt4])
// console.log(first);

let QuizData = [
  {
    question: "What is JavaScript?",
    A: "A markup language",
    B: "A programming language",
    C: "A database management system",
    D: "A networking protocol",
    answer: "B",
  },
  {
    question: "What are the different data types in JavaScript?",
    A: "integer, float, char",
    B: "string, number, boolean",
    C: "text, numeric, logical",
    D: "object, array, function",
    answer: "B",
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    A: "== performs type conversion, === does not",
    B: "=== performs type conversion, == does not",
    C: "Both perform type conversion",
    D: "Neither performs type conversion",
    answer: "A",
  },
  {
    question: "How do you declare a variable in JavaScript?",
    A: "using variable keyword",
    B: "using var keyword",
    C: "using int keyword",
    D: "using let keyword",
    answer: "B",
  },
  {
    question:
      "What is the difference between let, const, and var in JavaScript?",
    A: "They are all the same",
    B: "let is block-scoped, const is globally scoped, var is function-scoped",
    C: "var is block-scoped, let is globally scoped, const is function-scoped",
    D: "let is block-scoped, const is function-scoped, var is globally scoped",
    answer: "D",
  },
  {
    question: "What is a callback function in JavaScript?",
    A: "A function that calls another function",
    B: "A function passed as an argument to another function",
    C: "A function that returns another function",
    D: "A function that waits for user input",
    answer: "B",
  },
  {
    question: "What is event delegation in JavaScript?",
    A: "Attaching event listeners to individual elements",
    B: "Attaching event listeners to parent elements",
    C: "Attaching event listeners to sibling elements",
    D: "Attaching event listeners to child elements",
    answer: "B",
  },
  {
    question: "What is the purpose of the this keyword in JavaScript?",
    A: "To declare variables",
    B: "To create objects",
    C: "To refer to the current execution context",
    D: "To define functions",
    answer: "C",
  },
  {
    question: "What is a closure in JavaScript?",
    A: "A way to close a browser window",
    B: "A combination of a function and the lexical environment",
    C: "A type of loop",
    D: "A way to declare variables inside a function",
    answer: "B",
  },
  {
    question:
      "What is the difference between null and undefined in JavaScript?",
    A: "They are the same",
    B: "null represents absence of value, undefined represents an uninitialized variable",
    C: "null represents an uninitialized variable, undefined represents absence of value",
    D: "null is a string, undefined is a number",
    answer: "B",
  },
];

for (const i in QuizData) {
  // console.log(QuizData[i].A);
  question.innerHTML = QuizData[0].question;
  ans1.innerHTML = QuizData[0].A;
  ans2.innerHTML = QuizData[0].B;
  ans3.innerHTML = QuizData[0].C;
  ans4.innerHTML = QuizData[0].D;
  // opt1.innerHTML = QuizData[i].A
}
