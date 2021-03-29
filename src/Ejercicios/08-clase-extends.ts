class PersonaNormal{
 
    constructor( 
      public Nombre: string,
      public direccion: string,    
      ){ }
  
  }
  
  
  
  class Heroe extends PersonaNormal{
     //alterEgo: string;
     //edad: number;
     //nombreReal: number;
  
     constructor( 
      public alterego: string,
      public edad: number,
      public nombreReal : string
      ){
        super( nombreReal, 'New York, USA');
       }
  }
  
  const ironman = new Heroe ('Iroman' , 45, 'Tony');
  console.log(ironman);