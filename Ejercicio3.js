alert("EJERCICIO 3- MAYOR DE EDAD");
let edad=0;
let pares =0;
let impares=0;

for (let a = 1; a < 21; a++) {
   edad= Number(prompt("Ingrese las edades "+ a));
   if (edad<18) {
        pares += 1;
   } else{
        impares += 1;
   }
    
}
alert("Las personas mayor de edad son: " +impares);
alert("Las personas menor de edad son: " +pares);
document.getElementById("1").innerHTML="Las personas mayor de edad son: " +impares;
document.getElementById("2").innerHTML="Las personas menor de edad son: " +pares;