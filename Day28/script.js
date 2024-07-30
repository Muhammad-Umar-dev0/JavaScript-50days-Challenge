const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What does CSS stand for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'JavaScript Object Notation',
        'd': 'Helicopters Terminals Motorboats Lamborghinis',
        'correct': 'b'
    },
    {
        'que': 'What year was JavaScript launched?',
        'a': '1996',
        'b': '1995',
        'c': '1994',
        'd': 'None of the above',
        'correct': 'b'
    }
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const ques_box = document.getElementById('que-box');
const options = document.querySelectorAll('.option');
const labels = document.querySelectorAll('.row label');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();

    const data = questions[index];
    ques_box.innerText = `${index + 1}. ${data.que}`;
    labels[0].innerText = data.a;
    labels[1].innerText = data.b;
    labels[2].innerText = data.c;
    labels[3].innerText = data.d;
};

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }

    index++;
    loadQuestion();
}

const getAnswer = () => {
    let answer;
    options.forEach((input) => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
}

const reset = () => {
    options.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
    document.getElementById('box').innerHTML = `<h3>Quiz Ended</h3>
    <h2>${right} of ${total} are correct.</h2>`;
}

loadQuestion();
