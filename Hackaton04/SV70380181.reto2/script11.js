//11
class Persona 
{
    constructor(nombre, presupuesto) 
    {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
    }
}

function sumaPresupuestos(matrizPersonas) 
{
    let totalPresupuesto = 0;
    for (let i = 0; i < matrizPersonas.length; i++) 
    {
        totalPresupuesto += matrizPersonas[i].presupuesto;
    }
    return totalPresupuesto;
}


const persona1 = new Persona("Persona 1", 1000);
const persona2 = new Persona("Persona 2", 1500);
const persona3 = new Persona("Persona 3", 800);

const matrizPersonas = [persona1, persona2, persona3];

const total = sumaPresupuestos(matrizPersonas);
console.log("La suma total de presupuestos es: " + total);
