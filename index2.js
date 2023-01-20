const questions = [
  {
    id: 1,
    q: "Where is cogent labs?",
    //   options: [
    //     { id: 1, name: "Ali Town", value: "Ali Town" },
    //     { id: 2, name: "Wapda Town", value: "Wapda Town" },
    //     { id: 3, name: "Model Town", value: "Model Town" },
    //     { id: 4, name: "None", value: "None" },
    //   ],
    a: "Ali Town",
    b: "Wapda Town",
    c: "Model Town",
    d: "none",
    correctAnswer: "c",
  },
  {
    id: 2,
    q: "Which one is not Meta product?",
    //   options: [
    //     { id: 1, name: "Facebook", value: "facebook" },
    //     { id: 2, name: "WhatsApp", value: "whatsapp" },
    //     { id: 3, name: "Instagaram", value: "instagram" },
    //     { id: 4, name: "LinkedIn", value: "linkedin" },
    //   ],
    a: "Facebook",
    b: "WhatsApp",
    c: "Instagaram",
    d: "LinkedIn",
    correctAnswer: "d",
  },
];

let currentQuestion = questions[0];

let questionText = document.getElementById("question-text");

let option1 = document.getElementById("1");
let option2 = document.getElementById("2");
let option3 = document.getElementById("3");
let option4 = document.getElementById("4");

console.log(questions[0].q);
questionText.innerText = questions[i].q;
option1.innerText = questions[0].a;
option2.innerText = questions[0].b;
option3.innerText = questions[0].c;
option4.innerText = questions[0].d;

console.log("Umar");
