function showAlert() {
    alert("Hello, world!");
}

function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function applyStyles() {
    var textArea = document.getElementById("textInput");
    var fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "inherit";
        textArea.style.textDecoration = "none";
    }
}

function capitalizeAndMoo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value;

    // Uppercase the text
    textArea.value = text.toUpperCase();

    // Add "-Moo" to the last word of each sentence
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        var words = sentences[i].trim().split(" ");
        if (words.length > 0) {
            words[words.length - 1] += "-Moo";
        }
        sentences[i] = words.join(" ");
    }
    textArea.value = sentences.join(".");
}

document.getElementById("biggerButton").onclick = makeBigger;
document.getElementById("fancyRadio").onchange = applyStyles;
document.getElementById("boringRadio").onchange = applyStyles;
document.getElementById("mooButton").onclick = capitalizeAndMoo;