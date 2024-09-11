
function sumar(){
    let suma =0;
    for (let i = 0; i < 10; i++){
        suma+=i;
    }
    console.log(suma);
} 
sumar();

function restar(a:number,b:number):number{
    return a-b;
}
console.log(restar(10,5));

interface Mascotas{
    nombre:string,
    edad:number,
    raza:string
    mostrarEdad:()=>void;
}

let perro:Mascotas={
    nombre:'Firulais',
    edad:5,
    raza:'Perro',
    mostrarEdad(){
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
    }
}

function calcular(mascotas:Mascotas, x:number):void{
    mascotas.edad+=x;
    console.log(mascotas);
}

calcular(perro,2);
