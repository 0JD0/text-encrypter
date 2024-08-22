const secretKey = "mySecretKey12345";
let mode = 'encrypt';
let inputMode = document.getElementById('inputMode');
let sWidth = window.screen.width;

document.getElementById('inText').addEventListener('input', encrypt);

function encrypt() {
    let text = document.getElementById('inText').value;
    let result;

    if (mode === 'encrypt') {
        result = CryptoJS.AES.encrypt(text, secretKey).toString();

    } else {
        result = CryptoJS.AES.decrypt(text, secretKey).toString(CryptoJS.enc.Utf8);

        if (result === '') {
            result = 'Mensaje invalido';
        }
    }

    document.getElementById('outText').innerText = result;
}

function leftClick() {
    inputMode.style.left = '0';
    mode = 'encrypt';
    document.getElementById('outText').innerText = null;
    document.getElementById('inText').value = null;
}

function rightClick() {
    console.log(sWidth);
    if (sWidth < 700) {
        inputMode.style.left = '90px';    
    } else if (sWidth > 699 && sWidth < 1200) {
        inputMode.style.left = '250px';    
    } else {
        inputMode.style.left = '300px';    
    }
    
    mode = 'decrypt';
    document.getElementById('outText').innerText = null;
    document.getElementById('inText').value = null;
}