interface superHeroe{
    nombre: string;
    edad: number;  
    mostrarDireccion: ()=> string;
  }
  
  interface Direccion{
    calle: string,
    pais: string,
    ciudad: string,
  }
  
  
  const superHeroe ={
    nombre: "spiderman",
    edad: 30,
    direccion:{
       calle: 'main St',
       pais: 'USA',
       ciudad: 'NY'
    },
    mostrarDireccion(){
      return "nombre: " + this.nombre + ', ' + "ciudad: " + this.direccion.ciudad + ', ' + "Paìs: " + this.direccion.pais;
    }
  }
  
  const direccion = superHeroe.mostrarDireccion();
  console.log(direccion);