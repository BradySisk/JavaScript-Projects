document.write(typeof "word");

document.write(-3E310);
document.write(2E310);

document.write(10 > 2);
document.write(10 < 2);

console.log(2+2);
console.log(2<1);

document.write("20"+7);
document.write(10==4);
document.write(10==10);

a = 55;
b = 55;
document.write(a === b);

c = 55;
bingo = "was his name o";
document.write(c === bingo);

x = 55;
foo = 56;
document.write(x === foo);

e = 55;
f = 57;
document.write(e === f);

document.write(5>10 && 10>4);
document.write(5<10 && 10>4);
document.write(5>10 || 10>4);
document.write(5>10 || 10<4);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5<10);
}


function not_Function1() {
    document.getElementById("Not1").innerHTML = !(5>10);
}

function my_Function2 () {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function3 () {
    document.getElementById("Test3").innerHTML = 2>10;
}

function my_Function4 () {
    document.getElementById("Test4").innerHTML = 2<10;
}