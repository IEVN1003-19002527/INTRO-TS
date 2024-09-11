interface Reproductor{
    volumen:number; // Cambiado de 'volumne' a 'volumen'
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}
const reproductor:Reproductor={
    volumen:50, // Cambiado de 'volumne' a 'volumen'
    segundo:10,
    cancion:'Mess',
    detalles:{
        autor:'Ed Sheeran',
        year:2015
    }
}

// Corrección de comillas y uso de template literals
console.log(`El volumen actual es: ${reproductor.volumen}`);
console.log(`Los segundos son: ${reproductor.segundo}`);
console.log(`La canción es: ${reproductor.cancion}`);
console.log(`El cantante es: ${reproductor.detalles.autor}`);
console.log(`El año es: ${reproductor.detalles.year}`);

const{volumen, segundo, cancion, detalles}=reproductor;
const{autor, year}=detalles;

// Corrección de comillas y uso de template literals
console.log(`El volumen actual es: ${volumen}`);
console.log(`Los segundos son: ${segundo}`);
console.log(`La canción es: ${cancion}`);
console.log(`El cantante es: ${autor}`);
console.log(`El año es: ${year}`);

const dbz:string[]=['Goku','Vegeta','Trunks'];
// Corrección de comillas y uso de template literals
console.log(`Personaje 1: ${dbz[0]}`);
console.log(`Personaje 2: ${dbz[1]}`);
console.log(`Personaje 3: ${dbz[2]}`);

const[a,,b]=dbz;
// Corrección de comillas y uso de template literals
console.log(`Personaje 1: ${a}`);
console.log(`Personaje 2: ${b}`);