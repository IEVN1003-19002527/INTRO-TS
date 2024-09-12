class Persona{
    nombre:string;
    edad:number;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre} - Edad: ${this.edad}`);
    }
}

let persona:Persona;
persona=new Persona('Juan',20);
persona.imprimir();

class Dado{
    private valor:number=0;

    public tirar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    public imprimir(){
        console.log(`El valor del dado es: ${this.valor}`);
    }
}

let dado1=new Dado();
dado1.tirar(); 
dado1.imprimir();

