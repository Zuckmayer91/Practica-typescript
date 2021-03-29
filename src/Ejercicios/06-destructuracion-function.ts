

export interface producto{
    desc: string;
    precio: number; 
  }
  
  const telefono :producto ={
    desc: 'Nokia A1',
    precio: 150
  }
  
  const tablet :producto ={
    desc: 'Ipad  Air',
    precio: 350
  }
  
  export function calculaISV(Productos : producto[]):number{
     let total = 0;
     Productos.forEach((producto) => {
        total += producto.precio;
     })
  
     return total * 0.15;
  }
  const articulos = [telefono, tablet]
  const isv = calculaISV(articulos);
  console.log('ISV', isv);