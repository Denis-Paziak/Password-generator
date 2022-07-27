// Elements
let passwordLengthInput = document.querySelector(".password-length__input");
let passwordLengthRangeInput = document.querySelector(".password-length__range-input");

let finalPasswordInput = document.querySelector(".final-password__input");
let butGenerate = document.querySelector(".but-generate");

let radioButtonArr = document.querySelectorAll(".radio-button input");
let userSymbolArr = document.querySelector(".user-symbols__input");

// Event Listener
radioButtonArr.forEach(el => {
    el.addEventListener("click", () => {
        generateOption.access[el.value] = !generateOption.access[el.value];
        checkingOptions();
        generatePass();
    });
});

passwordLengthRangeInput.addEventListener("input", () => {
    if (passwordLengthRangeInput.value < 8) {
        passwordLengthRangeInput.value = 8;
    }
    passwordLengthInput.value = passwordLengthRangeInput.value;
});

passwordLengthInput.addEventListener("input", () => {
    if (passwordLengthInput.value > 100) {
        passwordLengthInput.value = 100;
    }
    passwordLengthRangeInput.value = passwordLengthInput.value;
});

butGenerate.addEventListener("click", generatePass);
// Option
let generateOption = {
    length: passwordLengthRangeInput.value,
    arrNum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrStr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
    arrSpecSymbols: ["/", "?", "@", "!", "#", "$", "%", "&"],
    arrUser: [],
    access: {
        num: true,
        str: false,
        specSymbols: false
    }
}

let arrGeneratePass = [];

function generatePass() {

    userArrFunc();
    // generate Arr
    if (generateOption.arrUser.length == 0) {
        if (generateOption.access.num == true) {
            arrGeneratePass = arrGeneratePass.concat(generateOption.arrNum);
        }
        if (generateOption.access.str == true) {
            arrGeneratePass = arrGeneratePass.concat(generateOption.arrStr);
        }
        if (generateOption.access.specSymbols == true) {
            arrGeneratePass = arrGeneratePass.concat(generateOption.arrSpecSymbols);
        }
    }

    // Option length
    generateOption.length = passwordLengthRangeInput.value;

    // Result 
    let result = '';

    for (let i = 0; i < generateOption.length; i++) {
        let random = Math.round(Math.random() * (arrGeneratePass.length - 1));
        result += arrGeneratePass[random];
    }

    finalPasswordInput.value = result;

    // Zeroing
    arrGeneratePass = [];
};
generatePass();

function checkingOptions() {
    let count = 0;
    for (key in generateOption.access) {
        if (generateOption.access[key] == true) {
            count++;
        }
    }

    if (count == 0) {
        generateOption.access.num = true;
        radioButtonArr[0].checked = true;
    }
}

function userArrFunc() {
    if (userSymbolArr.value != "") {
        generateOption.arrUser = userSymbolArr.value.split("");
    } else {
        generateOption.arrUser = [];
    }

    if (generateOption.arrUser.length > 0) {
        arrGeneratePass = generateOption.arrUser;
    }
}
