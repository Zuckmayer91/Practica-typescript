function sumar( a:number, b:number): number{
    return a + b;
  }
  
  const sumarFlecha = (a: number,b: number): number => {
      return a + b;
  }
  
  function multiplicar ( numero:number, otronumero?: number, base:number=2): number{
      return numero * base;
    }
   
    interface zelda{
  
      nombre: string;
      pv: number;
      mostrarHp: () => void;
    }
  
    function curar (personaje: zelda, curarX:number): void{
       personaje.pv += curarX;   
    }
  
  const nuevopersonaje:zelda ={
     nombre: 'link',
     pv: 50,
     mostrarHp(){
       console.log('puntos de vida: ', this.pv);
     }
  }
  
  curar(nuevopersonaje, 20);
  
  nuevopersonaje.mostrarHp();
  
  //Esto es documentaciòn
  //const resultado = multiplicar(5,10)
  //console.log (resultado); 
  