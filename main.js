let todoPizzas = [

    {nombre: `piza primavera `,
    cCarne: false,
    libreDeCarne: true,
    ingredientes: 'tomate y aceituna',
    precioPTamaño: 'grande:400 '},



    {nombre: 'piza con palmitos' ,
    cCarne: false,
    libreDeCarne:'roquefor y palmitos',
    ingredientes: 'roquefor y palmitos',
    precioPTamaño: 'grande:350'},

    {nombre: 'piza Jamon Huevo',
    cCarne: true,
    libreDeCarne: false,
    ingredientes: 'jamon y huevo',
    precioPTamaño: 'grande:300'},


    {nombre:'Pizza margarita',
    cCarne: false,
    libreDeCarne:true,
    ingredientes: 'tomate y albahaca',
    precioPTamaño:'grande:300'},



    {nombre: 'Pizza cuatro quesos',
    cCarne: false,
    libreDeCarne:true ,
    ingredientes: ' queso: mozzarela, gorgonzola, fontina y parmezano',
    precioPTamaño:'grande:400'},



    {nombre: 'Pizza de pepperoni',
    cCarne: true,
    libreDeCarne: false,
    ingredientes: 'peperoni',
    precioPTamaño: 'grande:450' },



    {nombre: 'Pizza cuatro estaciones',
    cCarne: true,
    libreDeCarne: false,
    ingredientes: 'esta pizza consta con 4 staciones, en la cual tienen, jamos, rucula,alcachofa y aceitunas negras',
    precioPTamaño: ' grande:500' },




    {nombre: 'Pizza con champiñones',
    cCarne: false,
    libreDeCarne: true,
    ingredientes: 'campiñones ',
    precioPTamaño: 'grande:300'},



 
    {nombre:'Pizza hawaiana' ,
    cCarne: true,
    libreDeCarne: false,
    ingredientes: 'jamon y piña',
    precioPTamaño:'grande:400'},




    {nombre: 'Pizza marinera',
    cCarne: false,
    libreDeCarne: true,
    ingredientes: 'salsa , queso',
    precioPTamaño: 'grande:300'},




    {nombre:'Pizza napolitana',
    cCarne: false,
    libreDeCarne: true,
    ingredientes: 'queso y tomate, oregano',
    precioPTamaño: 'grande:300'},




    {nombre: 'Pizza muzzarela',
    cCarne: false,
    libreDeCarne:true,
    ingredientes: 'doble queso',
    precioPTamaño: 'grande:400'},




    {nombre: 'Pizza fugazza',
    cCarne: false,
    libreDeCarne: true,
    ingredientes: 'queso y cebolla',
    precioPTamaño: 'grande:400'},
    ]




 console.log ('--------------------- <3 --------------------')


 function mostrarPizzas (pizza){

    pizza.forEach(todoPizzas => {

        console.log ( 'nombre:' + todoPizzas.nombre + ' ingredientes: '+ todoPizzas.ingredientes + ' precios:' + todoPizzas.precioPTamaño  )
    });
  }
 
  //mostrarPizzas(todoPizzas)


  let pedidoI = prompt( 'indique si quiere : " libre de carne " o " con carne "')


 let pedido = todoPizzas.filter (function  (pizza){

    if ( pedidoI == 'libre de carne' ){
    
        return pizza.libreDeCarne

    } else if (pedidoI == 'con carne') { 
        return pizza.cCarne
    }
 } )





 function filtrarPorsion (){

    const resultado= pedido
    if (resultado.length > 0){
        mostrarPizzas (resultado)
    } else {
        alert ('Lo sentimos, no encontramos esos ingredientes!')
    }
  }

  filtrarPorsion ()

  console.log ('--------------------- <3 --------------------')


   

  let cantidad = Number(prompt ( 'indique cantidad de pizzas a llevar')   
  )
function cantidadPizzas (){

    for ( let i=1 ; i <= cantidad ; i += 1){

         gustoP = prompt ( 'la pizza '+ i +' de que gusto va hacerss?')
        console.log ( gustoP)
        if ( gustoP == todoPizzas.nombre ){
            console.log (todoPizzas.nombre + todoPizzas. precioPTamaño) 
        }
    }

} 
cantidadPizzas()




/* function cualPizza ( )

    for (let i = 1 ; i <= cantidad ; i += 1 ){

        let cantidadP = prompt ( 'indique nombre de pizzas')

        console.log (cantidadP)
 }
}
cualPizza () 
console.log ('--------------------- <3 --------------------') */