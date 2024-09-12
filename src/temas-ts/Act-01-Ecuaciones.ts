class EcuacionCuadratica {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    calcularY(x: number): number {
        return this.a * x * x + this.b * x + this.c;
    }
}

const ecuacion = new EcuacionCuadratica(1, 2, 1);
const x = 2;
const y = ecuacion.calcularY(x);
console.log(`Para x = ${x}, y = ${y}`);
