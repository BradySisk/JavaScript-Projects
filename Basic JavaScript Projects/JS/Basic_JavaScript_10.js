function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}

function array_function() {
    var dog_pic = [];
    dog_pic[0] = "sleeping";
    dog_pic[1] = "playing";
    dog_pic [2] = "running";
    document.getElementById("Array").innerHTML = "In this picture, the dog is " +
    dog_pic[1] + "-";
}

function constant_function() {
    const monitor = {type:"curved monitor", brand:"MSI",refresh_rate:"144hz"};
    monitor.color="black";
    monitor.price="$159";
    monitor.response_time="1ms"
    document.getElementById("Constant").innerHTML = "The cost of the " +
    monitor.brand + monitor.response_time + "was" + monitor.price;
}
var X= 44;
document.write(X);
{
    let X = 21;
    document.write("<br>" + X);
}
document.write("<br>" + X);
//CAR DESCRIPTION
let car = {
    make: "Ford",
    model: "Mustang",
    year: "1965",
    color: "grey",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();


function stringFunction() {
    var str = "My string funtion.";
    var n = str.length;
    document.getElementById("hola").innerHTML = n;
}


var Instruments = ["Guitar","Drums","Piano","Bass","Viloin","Tumpet","Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


var text = "";
var i;
for (i = 0; i < 19; i++) {
  if (i === 6) { break; }
  text += "The number is " + i + "<br>";
}
document.getElementById("break").innerHTML = text;

var text = "";
var i;
for (i = 0; i < 18; i++) {
  if (i === 8) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;