const display = document.getElementById("display");
const acButton = document.getElementById("acButton");
const equalButton = document.getElementById("equalButton");
const calculator = document.getElementById("calculator");

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    // Prevent multiple consecutive operators
    if (display.value.trim() === "" || /[+\-*/]$/.test(display.value)) {
        return;
    }
    display.value += ` ${operator} `;
}

function calculate() {
    
        let expression = display.value.trim();
        expression = expression.replace(/×/g, "*").replace(/÷/g, "/");

        let actualResult = new Function("return " + expression)();
        let randomResult = Math.floor(Math.random() * 10000) - 5000;

        const errors = [
            "روح احسبها بدماغك يعمنا",
            "مش ناقصه وجع دماغ",
            "لو اعرف كنت هقولك",
            "تعلالي بعدين",
            "روح اتعالج يسطا",
            "you're cooked",
            "google it يسطا",
            "Error 555",
            "ماث ايرور يا حب "
        ];

        let randomChance = Math.random();

        if (true) {  
            display.value = errors[Math.floor(Math.random() * errors.length)];
        }
}

function clearDisplay() {
    display.value = "";
}

function moveButton(button) {
    let maxX = window.innerWidth - button.clientWidth - 20;
    let maxY = window.innerHeight - button.clientHeight - 20;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

acButton.addEventListener("mouseover", () => {
    moveButton(acButton);
});

equalButton.addEventListener("mouseover", () => {
    moveButton(equalButton);
});
function clearDisplay() {
    display.value = "";
}

// Function to move buttons inside the calculator
function moveButton(button) {
    let maxX = calculator.clientWidth - button.clientWidth - 20;
    let maxY = calculator.clientHeight - button.clientHeight - 20;

    let x = Math.random() * maxX;
    let y = Math.random() * maxY;

    button.style.transform = `translate(${x}px, ${y}px)`;
}

// Make "AC" button escape inside calculator
acButton.addEventListener("mouseover", () => {
    moveButton(acButton);
});

// Make "=" button escape inside calculator
equalButton.addEventListener("mouseover", () => {
    moveButton(equalButton);
});