function MyFirstFunction() {
    var str = "This text is blue", str2 = "This text is red";
    var result = str.fontcolor("blue");
    var result= str2.fontcolor("red");
    document.getElementById("colored-text").innerHTML = result;
}


function myFunction () {
    var sentence = "i am learning";
    sentence += "to make a video game!";
    document.getElementById("Game").innerHTML = sentence;
}