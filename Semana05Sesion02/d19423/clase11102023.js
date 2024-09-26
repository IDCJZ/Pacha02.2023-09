/*function una_funcion_cualquiera(){}
console.log(una_funcion_cualquiera.prototype)
var una_funcion_cualquiera = function(){};
console.log(una_funcion_cualquiera.prototype)
una_funcion_cualquiera.prototype.una_propiedad_cualquiera = true;
console.log(una_funcion_cualquiera.prototype)*/

function Vehiculo(brand, wheel){
    this.brand = "";
    this.wheel = "";
    

    this.getBrand=function(){
        return `Mi marca es ${this.brand}`;
    }
    this.getWheel= function(){
        return `Mis llantas son ${this.wheel}`
    }
}

function Moto({brand, wheel}){
    this.brand = brand;
    this.wheel = wheel;
    this.velocity = "100kph";

    this.getVelocity = function(){
        return `Mi velocidad es de ${this.velocity}`;
    }
}

Moto.prototype = new Vehiculo();
const harley = new Moto({
    brand:"harley-davidson", 
    wheel: 2
});

console.log(harley.getBrand())
console.log(harley.getWheel())
console.log(harley.getVelocity())
