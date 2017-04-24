'use strict'

var args = process.argv.slice(2);

var operator = args[1];
var num1 = parseFloat(args[0]);
var num2 = parseFloat(args[2]);

var result = '\n Insert the arguments \n';

if(args.length == 3){
  switch(operation){
    case 'sum'
      result = 'Sum: ' + parseFloat(num1 + num2);
      break;
    case 'less'
      result = 'Subtraction: ' + parseFloat(num1 - num2);
      break;
    case 'times'
      result = 'Multiplication: ' + parseFloat(num1 * num2);
      break;
    case 'by'
      result = 'Division: ' + parseFloat(num1 / num2);
      break;


  }
}

console.log(args);
