class Figura {
    calcularArea(): number {
        return 0;
    }

    calcularVolumen(): number {
        return 0;
    }
}

class Rectangulo extends Figura {
    constructor(private base: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return this.base * this.altura;
    }

    calcularVolumen(): number {
        return 0; 
    }
}

class Pentagono extends Figura {
    constructor(private lado: number, private apotema: number) {
        super();
    }

    calcularArea(): number {
        return (5 * this.lado * this.apotema) / 2;
    }

    calcularVolumen(): number {
        return 0; 
    }
}

class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio ** 2;
    }

    calcularVolumen(): number {
        return 0; 
    }
}

class PrismaRectangular extends Figura {
    constructor(private base: number, private altura: number, private profundidad: number) {
        super();
    }

    calcularArea(): number {
        return 2 * (this.base * this.altura + this.base * this.profundidad + this.altura * this.profundidad);
    }

    calcularVolumen(): number {
        return this.base * this.altura * this.profundidad;
    }
}

class Cilindro extends Figura {
    constructor(private radio: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return 2 * Math.PI * this.radio * (this.radio + this.altura);
    }

    calcularVolumen(): number {
        return Math.PI * this.radio ** 2 * this.altura;
    }
}

class PrismaPentagonal extends Figura {
    constructor(private apotema: number, private lado: number, private altura: number) {
        super();
    }

    calcularArea(): number {
        return 5 * this.lado * this.apotema + 5 * this.lado * this.altura;
    }

    calcularVolumen(): number {
        return (5 * this.lado * this.apotema * this.altura) / 2;
    }
}

const rectangulo = new Rectangulo(5, 10);
console.log("Área del rectángulo:", rectangulo.calcularArea());
rectangulo.calcularVolumen();

const pentagono = new Pentagono(6, 4);
console.log("Área del pentágono:", pentagono.calcularArea());
pentagono.calcularVolumen();

const circulo = new Circulo(3);
console.log("Área del círculo:", circulo.calcularArea());
circulo.calcularVolumen();

const prismaRectangular = new PrismaRectangular(3, 4, 5);
console.log("Área del prisma rectangular:", prismaRectangular.calcularArea());
console.log("Volumen del prisma rectangular:", prismaRectangular.calcularVolumen());

const cilindro = new Cilindro(2, 4);
console.log("Área del cilindro:", cilindro.calcularArea());
console.log("Volumen del cilindro:", cilindro.calcularVolumen());

const prismaPentagonal = new PrismaPentagonal(3, 4, 5);
console.log("Área del prisma pentagonal:", prismaPentagonal.calcularArea());
console.log("Volumen del prisma pentagonal:", prismaPentagonal.calcularVolumen());
