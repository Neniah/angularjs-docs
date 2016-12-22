function helloWorld(ename){
  return "Hello World!! I'm " + ename;
}

var name = "María Lobillo Santos";
var resultado = helloWorld(name);

var etiqueta = <HTMLElement>document.getElementById('container');
etiqueta.innerHTML = resultado;
