// Fichero javascript para repasar conceptos

var nombre = "Tigreton";
var color = "Naranja";
var edad = 7;

var concatenacion = concatenar(nombre,color,edad);
console.log(concatenacion)

var datos = document.getElementById("datos");
datos.innerHTML += `<h3>con comillas inversas se pueden añadir etiquetas html</h3>`

if(edad <= 10){
    datos.innerHTML += `<h4>${nombre} es muy joven, solo tiene ${edad} añitos</h4>`;
} else {
    datos.innerHTML += `<h4>${nombre} tiene ${edad} años</h4>`;
};

var max = 10;

for(var i = 0; i<= max; i++){
    datos.innerHTML += `<h6>${nombre} es muy bonito y lo escribo muchas veces<h6>`;
};

function concatenar(n, c, e){
    return (n + " es " + c + " y tiene " + e + " años");
};

var coche = {
    modelo: "AUDI RS7",
    velocidad: "400 km/h",
    antiguedad: "2020",
    mostrarDatos(){
        console.log(this.modelo,this.velocidad,this.antiguedad);
    },
};

datos.innerHTML += ("<h4>" + coche.modelo + " del " + coche.antiguedad + " tiene una velocidad de " + coche.velocidad + "</h4>");
coche.mostrarDatos();
console.log(coche);

// Promesas (then y catch)

var saludar = new Promise((resolve, reject) => {

        setTimeout(() => {
            let saludo = "Hola soy Tigreton";
            saludo = false;
            if(saludo){
                resolve(saludo);
            }else{
                reject("No te han saludado");
            }
        }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
});

saludar.catch(err => {
    alert(err);
});
