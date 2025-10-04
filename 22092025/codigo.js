function converirMetrosKilometros() {
    //Una variable es un espacio en memoria que guarda un valor
    metros = parseInt(document.getElementById("cajametros").value);
    //Operación
    Kilometros = metros / 1000;
    //Carga la variable del valor en la caja kilometros de la página.
    //document.getElementById("cajakilometros").value = Kilometros;
    document.getElementById("Kilometros").innerHTML = + Kilometros + " Km";
}

function ObtenerIMC() {
    //Una variable es un espacio en memoria que guarda un valor
    peso = parseInt(document.getElementById("cajapeso").value);
    altura = parseFloat(document.getElementById("cajaaltura").value);
    //Operación
    IMC = peso / (altura * altura);
    //Carga la variable del valor en la caja kilometros de la página.
    // document.getElementById("cajaimc").value = IMC;
    document.getElementById("IMC").innerHTML = + IMC.toFixed(2);
}

function ConvertirCelsius() {
    //Una variable es un espacio en memoria que guarda un valor
    Celsius = parseInt(document.getElementById("cajacelsius").value);
    //Operación
    Fahrenheit = 9 / 5 * Celsius + 32;
    //Carga la variable del valor en la caja kilometros de la página.
    //document.getElementById("cajafahrenheit").value = Fahrenheit;
    document.getElementById("Fahrenheit").innerHTML = + Fahrenheit + "°F";
}

function ObtenerIMC() {
    let peso = parseFloat(document.getElementById("cajapeso").value);
    let altura = parseFloat(document.getElementById("cajaaltura").value);

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        document.getElementById("IMC").innerHTML = "Datos inválidos";
        return;
    }

    let IMC = peso / (altura * altura);
    document.getElementById("IMC").innerHTML = IMC.toFixed(2);
}

function BorrarCampos() {
    document.getElementById("cajacelsius").value = "";
    document.getElementById("Fahrenheit").innerHTML = "";
}
function BorrarCamposIMC() {
    document.getElementById("cajapeso").value = "";
    document.getElementById("cajaaltura").value = "";
    document.getElementById("IMC").innerHTML = "";

}
function BorrarCamposPeso() {
    document.getElementById("cajametros").value = "";
    document.getElementById("Kilometros").innerHTML = "";

}