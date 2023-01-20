const questions = [
  {
    id: 1,
    q: "Where is cogent labs?",
    options: [
      { id: 1, name: "Ali Town", value: "Ali Town" },
      { id: 2, name: "Wapda Town", value: "Wapda Town" },
      { id: 3, name: "Model Town", value: "Model Town" },
      { id: 4, name: "None", value: "None" },
    ],
    correctAnswer: "facebook",
  },
  {
    id: 2,
    q: "Which one is not Meta product?",
    options: [
      { id: 1, name: "Facebook", value: "facebook" },
      { id: 2, name: "WhatsApp", value: "whatsapp" },
      { id: 3, name: "Instagaram", value: "instagram" },
      { id: 4, name: "LinkedIn", value: "linkedin" },
    ],
    correctAnswer: "facebook",
  },
];


let question_text = document.getElementById("question-text");
let option1 = document.getElementById("question-1-option-1");
let question_container = document.getElementById("question");
question_text.innerText = questions[0].q;
question_text.id = question.id; 

for (let question of questions) {
  const question_text_clone = question_text.cloneNode(true);
  question_text_clone.id = question?.id;
  question_text_clone.innerText = question?.q;
  document.getElementById("question").append(question_text_clone);
  for (let option of question.options) {
    let labelText = document.getElementById("label-1");
    let option1Clone = option1.cloneNode(true);
    option1Clone.name = option.name;
    option1.value = option.value;
    let labelTextClone = labelText.cloneNode(true);
    labelTextClone.innerText = option.value;
    question_container.appendChild(option1Clone);
    question_container.appendChild(labelTextClone);
  }
}
