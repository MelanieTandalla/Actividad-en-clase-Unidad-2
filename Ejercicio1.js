alert("EJERCICIO 1- DESCUENTO");
let name = prompt("Ingrese el nombre del producto");
let num =Number(prompt("Ingrese la cantidad de articulos"));
let uni = Number(prompt("Ingrese el precio unitario"));
let descuento;
let total=0;
let subtotal = uni*num;

if (num<=100) {
    descuento= subtotal*0.02
} else {
    if (num>=101 & num <=250) {
        descuento= subtotal*0.05
    } else {
        if (num>=251 & num<=800) {
            descuento= subtotal*0.08
        } else {
            if (num>=801 & num<=1000) {
                descuento= subtotal*0.012
            }
        }
    }
}
total= subtotal- descuento
alert("El descuento de su pedido es: " + descuento);
alert("El total de su cumpra es: " + total);
document.getElementById("1").innerHTML = "El descuento de su pedido es: " + descuento; 
document.getElementById("2").innerHTML = "El total de su cumpra es: " + total;
document.getElementById("3").innerHTML = "El producto " + name;
