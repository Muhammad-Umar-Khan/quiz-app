const questions = [
  {
    id: 1,
    q: "Who is Meta CEO?",
    options: [
      { id: 1, name: "Mark Zuckerberg", value: "Mark Zuckerberg" },
      { id: 2, name: "Elon Musk", value: "Elon Musk" },
      { id: 3, name: "Jeff Bezos", value: "Jeff Bezos" },
      { id: 4, name: "Tim Cook", value: "Tim Cook" },
    ],
    correctAnswer: "Mark Zuckerberg",
  },
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

let radiogroups_names = [
  "Meta-CEO",
  "prime-minister",
  "computer-parts",
  "palindrom",
  "popular-networking-site",
  "more-processors",
  "WWW-stands-for",
  "MS-DOS",
  "disks-technology",
  "land-of-thunder-bolts",
];

//selectors;

const result = document.getElementById("result");
const button = document.getElementById("submit_btn");

//eventListeners;

function addEventToInput() {
  for (let loop = 0; loop < 10; loop++) {
    let inputElements = document.getElementsByName(radiogroups_names[loop]);
    for (let element of inputElements)
      element.addEventListener("click", checkAllSelected);
  }
}

button.addEventListener("click", calculateScore);

//functions;

function initializeApp() {
  let question_text = document.getElementById("question-text");
  let option1 = document.getElementById("question-1-option-01");
  let option2 = document.getElementById("question-1-option-02");
  let option3 = document.getElementById("question-1-option-03");
  let option4 = document.getElementById("question-1-option-04");
  let label1 = document.getElementById("label-1");
  let label2 = document.getElementById("label-2");
  let label3 = document.getElementById("label-3");
  let label4 = document.getElementById("label-4");
  button.disabled = true;

  question_text.innerText = questions[0].q;

  option1.name = radiogroups_names[0];
  option2.name = radiogroups_names[0];
  option3.name = radiogroups_names[0];
  option4.name = radiogroups_names[0];

  option1.value = questions[0].options[0].value;
  option2.value = questions[0].options[1].value;
  option3.value = questions[0].options[2].value;
  option4.value = questions[0].options[3].value;

  label1.append(questions[0].options[0].value);
  label2.append(questions[0].options[1].value);
  label3.append(questions[0].options[2].value);
  label4.append(questions[0].options[3].value);
}

function displayQuestionsAndOptions() {
  let option1 = document.getElementById("question-1-option-01");
  let labelText = document.getElementById("label-1");
  let questions_container = document.getElementById("questions");
  for (let i = 1; i < questions.length; i++) {
    let question = document.getElementById("question");
    let question_clone = question.cloneNode(true);
    question_clone.childNodes[1].innerText = questions[i].q;
    questions_container.appendChild(question_clone);
    for (let j = 0; j < questions[i].options.length; j++) {
      let option1Clone = option1.cloneNode(true);
      option1Clone.name = radiogroups_names[i];
      option1Clone.id = questions[i].options[j].value;
      option1Clone.value = questions[i].options[j].value;
      let labelTextClone = labelText.cloneNode(true);
      labelTextClone.innerText = "";
      labelTextClone.appendChild(option1Clone);
      labelTextClone.append(questions[i].options[j].value);
      question_clone.appendChild(labelTextClone);
    }
  }
  addEventToInput();
}

function calculateScore() {
  let totalScore = 0;
  for (let i = 0; i < questions.length; i++) {
    let allInputs = document.getElementsByName(radiogroups_names[i]);
    for (let k = 0; k < allInputs.length; k++) {
      if (
        allInputs[k].checked &&
        allInputs[k].value === questions[i].correctAnswer
      ) {
        totalScore += 1;
      }
    }
    result.innerText = `Your total score is ${totalScore}/10`;
  }
}

function checkAllSelected() {
  let totalCount = 0;
  for (let i = 0; i < questions.length; i++) {
    let allInputs = document.getElementsByName(radiogroups_names[i]);
    for (let k = 0; k < allInputs.length; k++) {
      if (allInputs[k].checked) {
        totalCount++;
      }
    }
  }
  if (totalCount >= 10) {
    button.disabled = false;
  }
}

initializeApp();
displayQuestionsAndOptions();
