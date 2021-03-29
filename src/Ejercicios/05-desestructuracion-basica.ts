import { CancellationToken } from "typescript";

interface Reproductor{
 volumen: number;
 segundo: number;
 cancion:  string;
 detalles: Detalles

}

interface Detalles{

 Autor: string;
 year: number;
}

const reproductor: Reproductor = {
  volumen: 90,
  segundo: 36,
  cancion: "Mess",
  detalles: {
    Autor: 'Ed Sheeran',
    year: 2015
  }
}
const {volumen, segundo, cancion, detalles} =reproductor;
const{Autor} = detalles;

const dbz: string [] = ['Goku', 'Vegeta', 'trunks'];
const[p1 , p2 , p3 ] = dbz;

console.log("Personaje 1: ", p1);
console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p3);

//console.log("El volumen actual es de: ",  volumen);
//console.log("El segundo actual es de: ",  segundo);
//console.log("La canciòn actual es: ",  cancion);
//console.log("El Autor es ", Autor);