/*
function helloWorld(ename){
  return "Hello World!! I'm " + ename;
}

var name = "María Lobillo Santos";
var resultado = helloWorld(name);
*/

var etiqueta = <HTMLElement>document.getElementById('container');
//etiqueta.innerHTML = resultado;

// Variables and types
var fullname:string = "Jane Doe";
var age:number = 55;
var programmer:boolean = true;
var languages: Array<string> = ["PHP", "JS", "Perl", "Java", "Python", "C"];

etiqueta.innerHTML = fullname + " - " + age;

// let and var
var a = 7;
var b = 12;

if(a === 7){
  let a = 4;
  var b = 1;

  console.log("IF Statement : " + a + " - " + b);
}

console.log("Out of IF Statement : " + a + " - " + b);

// Functions
function getNumber(num:number){
  return num;
}

alert(getNumber(34));
