import { isEven } from "./Module.js";

function result() {
    const resultValue = isEven();
    const answer = document.getElementById("answer");
    if (resultValue === 'Even') {
        alert("偶数です。It's an even number.");
        answer.textContent =  "偶数(An even number)";
    } else if (resultValue === 'Odd') {
        alert("奇数です。It's an odd number.");
        answer.textContent = "奇数(An odd number)";
    } else if (resultValue === 'NaN') {
        alert("数値ではありません。Not a number.");
        answer.textContent = "数値ではありません。Not a number.";
    }
}

const Btn = document.getElementById('button');

Btn.addEventListener('click', result);