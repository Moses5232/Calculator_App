function getNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}

function add() {
    let numbers = getNumbers();
    let answer = numbers.num1 + numbers.num2;

    document.getElementById("result").innerHTML =
        "Result: " + answer;
}

function subtract() {
    let numbers = getNumbers();
    let answer = numbers.num1 - numbers.num2;

    document.getElementById("result").innerHTML =
        "Result: " + answer;
}

function multiply() {
    let numbers = getNumbers();
    let answer = numbers.num1 * numbers.num2;

    document.getElementById("result").innerHTML =
        "Result: " + answer;
}

function divide() {
    let numbers = getNumbers();

    if (numbers.num2 === 0) {
        document.getElementById("result").innerHTML =
            "Cannot divide by zero";
        return;
    }

    let answer = numbers.num1 / numbers.num2;

    document.getElementById("result").innerHTML =
        "Result: " + answer;
}