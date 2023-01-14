var inputText
var finalText
var finalTextDecrypt

function encryptText() {
    var inputText = document.getElementById("textbox").value;
    finalText = inputText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/a/g, "ai").replace(/u/g, "ufat");
    document.getElementById("output").innerHTML = finalText;
}

function decryptText() {
    var inputText = document.getElementById("textbox").value;
    finalTextDecrypt = inputText.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("output").innerHTML = finalTextDecrypt;
}

function copyText() {
    var copyText = document.getElementById("output").innerHTML;
    navigator.clipboard.writeText(copyText);
    alert("You just copy this: " + copyText);
}

function clearText() {
    document.getElementById("textbox").value = "";
    document.getElementById("output").innerHTML = "";
}


