let entrada;
let celsius;

while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

   
    if (entrada === null) {
        alert("Operación cancelada.");
        break;
    }

    
    celsius = Number(entrada);

   
    if (entrada.trim() !== "" && !isNaN(celsius)) {
        break;
    } else {
        alert("Error: Debes ingresar un número válido. Inténtalo de nuevo.");
    }
}

if (entrada !== null) {
   
    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    
    console.log("Grados Kelvin: " + kelvin);
    console.log("Grados Fahrenheit: " + fahrenheit);

    
    let divResultados = document.getElementById("resultados");
    divResultados.innerHTML = `
        <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
        <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
    `;
}