const questions = [
  {
    id: 2,
    q: "Who is the current prime mister of pakistan?",
    options: [
      { id: 1, name: "Tahir Raza Khan", value: "Tahir Raza Khan" },
      { id: 2, name: "Muhammad Zahid", value: "Muhammad Zahid" },
      { id: 3, name: "Umar Khan", value: "Umar Khan" },
      { id: 4, name: "Shabaz Sharif", value: "Shabaz Sharif" },
    ],
    correctAnswer: "Shabaz Sharif",
  },
  {
    id: 3,
    q: "Parts of computer?",
    options: [
      { id: 1, name: "One", value: "One" },
      { id: 2, name: "Two", value: "Two" },
      { id: 3, name: "Five", value: "Five" },
      { id: 4, name: "Three", value: "Three" },
    ],
    correctAnswer: "Five",
  },
  {
    id: 4,
    q: "Which of the following is palindrom?",
    options: [
      { id: 1, name: "Car", value: "Car" },
      { id: 2, name: "Madam", value: "Madam" },
      { id: 3, name: "Ant", value: "Ant" },
      { id: 4, name: "Three", value: "Three" },
    ],
    correctAnswer: "Madam",
  },
  {
    id: 5,
    q: "Today the most popular networking site is?",
    options: [
      { id: 1, name: "Twitter", value: "Twitter" },
      { id: 2, name: "Facebook", value: "Facebook" },
      { id: 3, name: "Instagaram", value: "Instagaram" },
      { id: 4, name: "MySpace", value: "MySpace" },
    ],
    correctAnswer: "Facebook",
  },
  {
    id: 6,
    q: "If a computer has more than one processor then it is known as?",
    options: [
      { id: 1, name: "Uni-process", value: "Uni-process" },
      { id: 2, name: "Multiprocessor", value: "Multiprocessor" },
      { id: 3, name: "Multi-threaded", value: "Multi-threaded" },
      { id: 4, name: "Multi-programming", value: "Multi-programming" },
    ],
    correctAnswer: "Multiprocessor",
  },
  {
    id: 7,
    q: "WWW stands for?",
    options: [
      { id: 1, name: "World Whole Web", value: "World Whole Web" },
      { id: 2, name: " Wide World Web", value: " Wide World Web" },
      { id: 3, name: "Web World Wide", value: "Web World Wide" },
      { id: 4, name: "World Wide Web", value: "World Wide Web" },
    ],
    correctAnswer: "World Wide Web",
  },
  {
    id: 8,
    q: "What type of operating system MS-DOS is?",
    options: [
      {
        id: 1,
        name: "Command Line Interface",
        value: "Command Line Interface",
      },
      {
        id: 2,
        name: "Graphical User Interface",
        value: "Graphical User Interface",
      },
      { id: 3, name: "Multitasking", value: "Multitasking" },
      { id: 4, name: "Menu Driven Interface", value: "Menu Driven Interface" },
    ],
    correctAnswer: "Command Line Interface",
  },
  {
    id: 9,
    q: "Which technology is used in compact disks?",
    options: [
      { id: 1, name: "Machanecial", value: "Machanecial" },
      { id: 2, name: "Electrical", value: "Electrical" },
      { id: 3, name: "Electro Magnetic", value: "Electro Magnetic" },
      { id: 4, name: " Laser", value: " Laser" },
    ],
    correctAnswer: " Laser",
  },
  {
    id: 10,
    q: "Which country is known as the land of thuderbolts?",
    options: [
      { id: 1, name: "China", value: "China" },
      { id: 2, name: "Bhutan", value: "Bhutan" },
      { id: 3, name: "Mongolia", value: "Mongolia" },
      { id: 4, name: "Thailand", value: "Thailand" },
    ],
    correctAnswer: "Bhutan",
  },
];

let questions_container = document.getElementById("questions");
let question_text = document.getElementById("question-text");
let option1 = document.getElementById("question-1-option-1");
let labelText = document.getElementById("label-1");

for (let i = 0; i < questions.length; i++) {
  let question = document.getElementById("question");
  let question_clone = question.cloneNode(true);
  question_clone.childNodes[1].innerText = questions[i].q;
  questions_container.appendChild(question_clone);
  for (let j = 0; j < questions[i].options.length; j++) {
    let option1Clone = option1.cloneNode(true);
    option1Clone.name = i;
    option1Clone.id = questions[i].options[j].value;
    option1Clone.value = questions[i].options[j].value;
    let labelTextClone = labelText.cloneNode(true);
    labelTextClone.innerText = questions[i].options[j].value;
    labelTextClone.for = i;
    question_clone.appendChild(option1Clone);
    question_clone.appendChild(labelTextClone);
  }
}

let totalScore = 0;

function getSelectedValues() {
  let inputValues = document.getElementsByName("question-1-options");
  for (let j = 0; j < inputValues.length; j++) {
    if (inputValues[j].checked && inputValues[j].value == "Mark Zuckerberg") {
      totalScore += 1;
    }
  }
  for (let i = 0; i < 9; i++) {
    let allInputs = document.getElementsByName(i);
    for (let k = 0; k < allInputs.length; k++) {
      if (
        allInputs[k].checked &&
        allInputs[k].value == questions[i].correctAnswer
      ) {
        totalScore += 1;
      }
    }
  }
  console.log(`Your total score is ${totalScore}/10`);
}
