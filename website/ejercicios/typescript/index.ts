// Interfaces
enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}

interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  // color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());

//Boolean
let muted: boolean = true
muted = false

//Números
let numerador: number = 42
let denominador: number = 6
let resultado = numerador/denominador

//string
let nombre: string = 'Félix'
let saludo = `Me llamo ${nombre}`

//Arreglos
let people: string[] = []
people = ["Isabel", "Nicole", "Raul"]
people.push("90")

let peopleAndNumber: Array< string | number > = []
peopleAndNumber.push("Alonso")
peopleAndNumber.push(90)

//Enum
enum Colores {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Colores = Colores.Rojo
console.log(`Mi color favorito es ${colorFavorito}`)

//Any
let comodin: any = "Joker"
comodin = { type: "Wildcard" }

//Objects
let someObject: object = { type: "Wildcard" }

//Funciones
function add(a:number, b:number): number {
  return a + b
}
const sum = add(7,8)

function createAdder(a:number): (number) => number {
  return function(b:number){
    return b + a
  }
}

const addFour = createAdder(4)
const fourPlus6 = addFour(6)

function fullName(firstName: string, lastName: string = "Bravo"): string {
  return `${firstName} ${lastName}`
}

const felix = fullName("Félix")