function converirMetrosKilometros() {
    //Una variable es un espacio en memoria que guarda un valor
    metros = parseInt(document.getElementById("cajametros").value);
    //Operación
    Kilometros = metros / 1000;
    //Carga la variable del valor en la caja kilometros de la página.
    document.getElementById("cajakilometros").value = Kilometros;
}

function ObtenerIMC() {
    //Una variable es un espacio en memoria que guarda un valor
    peso = parseInt(document.getElementById("cajapeso").value);
    altura = parseFloat(document.getElementById("cajaaltura").value);
    //Operación
    IMC = peso / (altura * altura);
    //Carga la variable del valor en la caja kilometros de la página.
    document.getElementById("cajaimc").value = IMC;
}

function ConvertirCelsius() {
    //Una variable es un espacio en memoria que guarda un valor
    Celsius = parseInt(document.getElementById("cajacelsius").value);
    //Operación
    Fahrenheit = 9/5 * Celsius + 32;
    //Carga la variable del valor en la caja kilometros de la página.
    document.getElementById("cajafahrenheit").value = Fahrenheit;
}
formatResultToInput('cajakilometros', '45.6785678', 1)