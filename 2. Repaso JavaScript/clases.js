//Clases
class Coche {
    constructor(modelo, velocidad, color){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.color = color;
    }

    aumentarVelocidad(n){
        this.velocidad += n;
    }

    reducirVelocidad(n){
        this.velocidad -= n;
    }
};

//Herencias
class Autobus extends Coche {
    constructor(modelo, velocidad, color, altura){
        super(modelo, velocidad, color);
        this.altura = altura;
    }
    mostrarAltura(){
        return ("La altura del autobus es de " + this.altura);
    }
};

var coche1 = new Coche("Audi RS7", 300, "Negro");
var coche2 = new Coche("Mercedes Clase B", 250, "Blanco");
var coche3 = new Coche("Ferrari", 400, "Rojo");
var autobus1 = new Autobus("ALSA", 150, "Azul", 6)

console.log(coche1, coche2, coche3, autobus1);
coche1.aumentarVelocidad(100);
document.getElementById("datos").innerHTML += "<h3> La velocidad del " + (coche1.modelo) + " es "+ (coche1.velocidad) + "</h3>";
document.getElementById("datos").innerHTML += "<h3> La altura del " + (autobus1.modelo) + " es "+ (autobus1.altura) + "</h3>";
