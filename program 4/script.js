const questions = [
    { question: "What keyword is used to declare a variable in JavaScript?", options: ["var", "int", "string", "let"], answer: "let" },
    { question: "Which method is used to print something to the console?", options: ["log()", "print()", "display()", "write()"], answer: "log()" },
    { question: "How do you write a comment in JavaScript?", options: ["/* comment */", "// comment", "<!-- comment -->", "** comment **"], answer: "// comment" },
    { question: "What is event bubbling in JavaScript?", options: ["An event propagating from child to parent", "An event stopping immediately", "An event only affecting a single element", "An event propagating from parent to child"], answer: "An event propagating from child to parent" },
    { question: "Which method is used to attach an event listener to an element?", options: ["addEvent()", "attachEvent()", "onEvent()", "addEventListener()"], answer: "addEventListener()" },
    { question: "Which loop executes a block of code a specific number of times?", options: ["for", "while", "do...while", "foreach"], answer: "for" },
    { question: "What is the basic structure of a JavaScript object?", options: ["Key-value pairs", "Only keys", "Only values", "An array"], answer: "Key-value pairs" },
    { question: "Which loop is best suited when the number of iterations is unknown?", options: ["for", "while", "do...while", "foreach"], answer: "while" },
    { question: "How do you stop event bubbling?", options: ["stopPropagation()", "preventDefault()", "return false", "stopEvent()"], answer: "stopPropagation()" },
    { question: "Which JavaScript loop executes at least once before checking the condition?", options: ["for", "while", "do...while", "foreach"], answer: "do...while" },
    { question: "How do you declare an arrow function in JavaScript?", options: ["function => {}", "() => {}", "=> function() {}", "function() => {}"], answer: "() => {}" },
    { question: "Which of the following is a falsy value in JavaScript?", options: ["'false'", "0", "'0'", "[]"], answer: "0" },
    { question: "Which JavaScript method is used to convert a JSON string into an object?", options: ["JSON.parse()", "JSON.stringify()", "JSON.objectify()", "JSON.toObject()"], answer: "JSON.parse()" },
    { question: "What will be the output of Boolean('false')?", options: ["true", "false", "undefined", "null"], answer: "true" },
    { question: "Which array method is used to remove the last element?", options: ["pop()", "push()", "shift()", "unshift()"], answer: "pop()" },
    { question: "Which operator is used for exponentiation in JavaScript?", options: ["^", "**", "exp()", "pow()"], answer: "**" },
    { question: "Which function is used to execute a piece of code after a specified delay?", options: ["setTimeout()", "setInterval()", "wait()", "delay()"], answer: "setTimeout()" },
    { question: "Which keyword is used to handle exceptions in JavaScript?", options: ["catch", "try", "throw", "finally"], answer: "try" }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("quiz-container").innerHTML = `<h2>Game Over! Your Score: ${score}/${questions.length}</h2>`;
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
    document.getElementById("options").innerHTML = q.options.map(option =>
        `<button onclick="checkAnswer('${option}')">${option}</button>`
    ).join(" ");
}

function checkAnswer(selected) {
    const correct = questions[currentQuestion].answer;
    if (selected === correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong! The correct answer was: " + correct);
    }
    currentQuestion++;
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
