let arrNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrStr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let arrSpecSimvol = ["!", "@", "$"];
let finalArr = [];

let domPass = document.querySelector(".password");

let options = {
    length: 8,
    number: true,
    string: false,
    specSimvol: false,
    arrNumber: arrNum,
    arrString: arrStr,
    arrSpecSimvol: arrSpecSimvol
}


let generateBut = document.querySelector(".generate");
generateBut.addEventListener("click", generatePass);

function generatePass() {
    let passLenght = document.querySelector(".pass-lenght");
    options.length = passLenght.value;

    auditOption();
    finalArr.concat(options.arrNumber, options.arrString, options.arrSpecSimvol);
    let result = '';

    for (let i = 0; i < options.length; i++) {
        let random = Math.round(Math.random() * (finalArr.length - 1));
        result += finalArr[random];
    }
    domPass.innerHTML = result;
    finalArr = [];
}
generatePass();

function auditOption() {
    if (options.length < 8) {
        options.length = 8;
    };

    let inputs = document.querySelectorAll(".pass__checkbox");
    inputs.forEach(el => {
        if (el.checked) {
            options[el.value] = true;
        } else {
            options[el.value] = false;
        }
    });

    if (options.number) {
        finalArr = finalArr.concat(options.arrNumber);
    };
    if (options.string) {
        finalArr = finalArr.concat(options.arrString);
    };
    if (options.specSimvol) {
        finalArr = finalArr.concat(options.arrSpecSimvol);
    };

    if (!options.number && !options.string && !options.specSimvol) {
        finalArr = finalArr.concat(options.arrNumber);
    }
}

