function capitalLetter() {
    let capLet = prompt("Insert Sentence here")
    var capLet = capLet.split(" "); // it splits the string in to a substrings and returns as a new array. when empty splits between each character
    for (var i = 0, x = capLet.length; i < x; i++) { // ++ is i = i +1.  my i is 0,and my x is caplet = Capital letter.
        capLet[i] = capLet[i][0].toUpperCase() + capLet[i].substr(1);
    };
    return capLet.join(" "); {
        document.getElementById("capLet").innerHTML = capLet;
    }
}

window.alert(capitalLetter());


console.log(capitalLetter("i enjoy learning a new language."));
console.log(capitalLetter("my first car was a golf. she was named stacy."))