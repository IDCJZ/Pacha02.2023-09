//12
class Estudiante
{
    constructor(nombre, edad) 
    {
        this.nombre = nombre;
        this.edad = edad;
    }
}

function obtenerNombresDeEstudiantes(matrizEstudiantes) 
{
    const nombresEstudiantes = [];
    for (let i = 0; i < matrizEstudiantes.length; i++) 
    {
        nombresEstudiantes.push(matrizEstudiantes[i].nombre);
    }
    return nombresEstudiantes;
}

const estudiante1 = new Estudiante("Juan", 20);
const estudiante2 = new Estudiante("María", 22);
const estudiante3 = new Estudiante("Carlos", 19);

const matrizEstudiantes = [estudiante1, estudiante2, estudiante3];

const nombres = obtenerNombresDeEstudiantes(matrizEstudiantes);
console.log("Nombres de estudiantes:", nombres);
