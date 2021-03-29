import { producto, calculaISV } from "./Ejercicios/06-destructuracion-function";


const carritodeCompras: producto [] = [


      {
         desc: 'Telefono 1',
         precio:100
      },
      {
        desc: 'Telefono 2',
        precio: 150
      },
];

const [total, isv] = calculaISV( carritodeCompras );


console.log('Total', total),

console.log('ISV', isv)