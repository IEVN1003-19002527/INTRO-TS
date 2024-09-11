import {calcularIVA2,Producto} from './05-desestructura-funciones';

const carrito:Producto[]=[
    {
        desc:'Telefono 1',
        precio:100
    },
    {
        desc:'Telefono 2',
        precio:200
    }
];
const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);