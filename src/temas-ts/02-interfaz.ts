
interface Alumno{
    nombre: string
    edad: number
    email: string
    calificacion?: number
}

const Alumno:Alumno={
    nombre: 'Mario',
    edad: 23,
    email: 'mario@gmail.com'
}

console.log(Alumno)

let mascotas=['perro','gato','loro','pez'];
mascotas[1]='Nuevo gato';
mascotas.push('conejo');
console.log(mascotas);

let tem:(string | number)[]=[];
tem.push(11);
tem.push('Mario');
console.log(tem);

