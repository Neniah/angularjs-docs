/*
function helloWorld(ename){
  return "Hello World!! I'm " + ename;
}

var name = "María Lobillo Santos";
var resultado = helloWorld(name);
*/
var etiqueta = document.getElementById('container');
//etiqueta.innerHTML = resultado;
// Variables and types
var fullname = "Jane Doe";
var age = 55;
var programmer = true;
var languages = ["PHP", "JS", "Perl", "Java", "Python", "C"];
etiqueta.innerHTML = fullname + " - " + age;
// let and var
var a = 7;
var b = 12;
if (a === 7) {
    var a_1 = 4;
    var b = 1;
    console.log("IF Statement : " + a_1 + " - " + b);
}
console.log("Out of IF Statement : " + a + " - " + b);
// Functions
function getNumber(num) {
    return "Number: " + num;
}
function getString(text) {
    if (text == "hello") {
        var num = 66;
    }
    else {
        var num = 90;
    }
    return num;
}
alert(getNumber(34));
alert(getString('hello'));
