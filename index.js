const usd = 1011;
const real = 167.6;
const euro = 1064.1;
const libra = 1285.5;
const sol = 269.9;

let operacion;
let moneda;
let cantidad;
let total;

do {
    operacion = prompt(
        "Bienvenido a CoderExchange! \nPara empezar indique el tipo de operacion que desea realizar \nC ---->> Comprar \nV ---->> Vender"
      ).toUpperCase();
      if (operacion != "C" && operacion != "V") {
        alert("Ingrese un valor valido")
    }
} while (operacion != "C" && operacion != "V");

do {
    moneda = prompt(
        "Ingrese la moneda que desea comprar o vender \nUSD --->> Dolar estadounidense \nR --->> Real Brasilero \nEU --->> Euro \n LI --->> Libra \n S --->> Sol Peruano"
      ).toUpperCase();
      if (moneda != "USD" && moneda != "R" && moneda != "EU" && moneda != "LI" && moneda != "S") {
        alert("Ingrese un valor valido")
    }
} while (moneda != "USD" && moneda != "R" && moneda != "EU" && moneda != "LI" && moneda != "S");

do {
    cantidad = parseFloat(prompt("Ingrese la cantidad que desea comprar o vender"));
if (isNaN(cantidad)) {
    alert("ingrese un valor numerico")
}
    
} while (isNaN(cantidad));

if (operacion === "C" && moneda === "USD") {
    alert("La operacion que usted eligio es COMPRAR " + cantidad + " USD");
    total = cantidad * usd;
    alert("El monto a abonar es de: " + total + " ARS");
}

if (operacion === "C" && moneda === "R") {
    alert("La operacion que usted eligio es COMPRAR " + cantidad + " Reales brasileros");
    total = cantidad * real;
    alert("El monto a abonar es de: " + total + " ARS");
}

if (operacion === "C" && moneda === "EU") {
    alert("La operacion que usted eligio es COMPRAR " + cantidad + " Euros");
    total = cantidad * euro;
    alert("El monto a abonar es de: " + total + " ARS");
}

if (operacion === "C" && moneda === "LI") {
    alert("La operacion que usted eligio es COMPRAR " + cantidad + " Libras");
    total = cantidad * libra;
    alert("El monto a abonar es de: " + total + " ARS");
}

if (operacion === "C" && moneda === "S") {
    alert("La operacion que usted eligio es COMPRAR " + cantidad + " Soles Peruanos");
    total = cantidad * sol;
    alert("El monto a abonar es de: " + total + " ARS");
}

if (operacion === "V" && moneda === "USD") {
    alert("La operacion que usted eligio es VENDER " + cantidad + " USD");
    total = cantidad * usd;
    alert("El monto que usted recibira es de: " + total + " ARS");
}

if (operacion === "V" && moneda === "R") {
    alert("La operacion que usted eligio es VENDER " + cantidad + " Reales Brasileros");
    total = cantidad * real;
    alert("El monto que usted recibira es de: " + total + " ARS");
}

if (operacion === "V" && moneda === "EU") {
    alert("La operacion que usted eligio es VENDER " + cantidad + " Euros");
    total = cantidad * euro;
    alert("El monto que usted recibira es de: " + total + " ARS");
}

if (operacion === "V" && moneda === "LI") {
    alert("La operacion que usted eligio es VENDER " + cantidad + " Libras");
    total = cantidad * libra;
    alert("El monto que usted recibira es de: " + total + " ARS");
}

if (operacion === "V" && moneda === "S") {
    alert("La operacion que usted eligio es VENDER " + cantidad + " Soles Peruanos");
    total = cantidad * sol;
    alert("El monto que usted recibira es de: " + total + " ARS");
}




