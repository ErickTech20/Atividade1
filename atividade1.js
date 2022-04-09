var num1, num2, num3, num4, num5, num6, num7, num8, res;
num1 = prompt("Digite um número");
num1 = parseInt(num1);
num2 = prompt("Digite outro número");
num2 = parseInt(num2);
res = (num1 == num2);
document.write("ERICK BEZERRA DOS SANTOS, RA: 2222103266<br>");
document.write("Números digitados:<br>num1: " + num1 + "<br> num2: " + num2 + "<br>");
document.write("Igualdade: " + res + "<br>");//false
res = (num1 === num2);
document.write(" Identico: " + res + "<hr>");//false
//
num3 = prompt("Digite um número");
num3 = parseInt(num3);
num4 = prompt("Digite outro número");
num4 = parseInt(num4);
res = (num3 != num4);
document.write("ERICK BEZERRA DOS SANTOS, RA: 2222103266<br>");
document.write("Números digitados:<br>num3: " + num3 + "<br> num4: " + num4 + "<br>");
document.write("Não igual: " + res + "<br>");//true
res = (num3 !== num4);
document.write("Não identico: " + res + "<hr>");//true
//
num5 = prompt("Digite um número");
num5 = parseInt(num5);
num6 = prompt("Digite outro número");
num6 = parseInt(num6);
res = (num5 > num6);
document.write("ERICK BEZERRA DOS SANTOS, RA: 2222103266<br>");
document.write("Números digitados:<br>num5: " + num5 + "<br> num6: " + num6 + "<br>");
document.write("Maior: " + res + "<br>");//true
res = (num5 < num6);
document.write("Menor: " + res + "<hr>");//false
//
num7 = prompt("Digite um número");
num7 = parseInt(num7);
num8 = prompt("Digite outro número");
num8 = parseInt(num8);
res = (num7 >= num8);
document.write("ERICK BEZERRA DOS SANTOS, RA: 2222103266<br>");
document.write("Números digitados:<br>num7: " + num7 + "<br> num8: " + num8 + "<br>");
document.write("Maior ou igual: " + res + "<br>");//true
res = (num7 <= num8);
document.write("Menor ou igual: " + res + "<hr>");//false

/*
Saída:
Nome do aluno, RA: seu RA
Números digitados:
num1: 12
num2: 5
-------------------
Igualdade: false
Identico: false
*/