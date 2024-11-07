const productos = [
    { 
        id: 1,
        name: "Cafe",
        price: 10,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1200px-A_small_cup_of_coffee.JPG"
    },
    {
        id: 2,
        name: "Cafe con leche",
        price: 20,
        image: "https://i.blogs.es/421374/cafe-con-leche2/450_1000.jpg"
    },
    {
        id: 3,
        name: "Té",
        price: "40",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6e61krKMDX3eMCv626q25pZauJK_f3U9MQQ&s"
    }
];

let carrito = []

const agregarProductos=({nombre, precio, imagen})=>{
    carrito.push({nombre,precio,imagen});
}

const mostrarProductos=()=>{
    let listaProductos = "";
    for(let producto of productos){
        listaProductos += `Opcion: ${producto.id}
        Nombre: ${producto.name}
        Precio: ${producto.price}
        `
    }
    return listaProductos;
}

const mostrarCarrito = ()=> {
    let listaCarrito = "";
    for(let producto of carrito){
        listaCarrito += `Nombre ${producto.nombre} \n`
        listaCarrito += `precio ${producto.precio} \n`
    }
    return listaCarrito;
}

const agregarNuevoProducto=()=>{
    let nombreProducto = prompt("Ingrese nuevo producto");
    let imagen = prompt("Ingrese url de imagen");
    let precio = parseFloat(prompt("Ingrese precio"));
    let id = productos.length + 1
    if (nombreProducto && !isNaN(precio) && imagen){
        productos.push({name: nombreProducto, image: imagen, price: precio, id})
    }else{
        alert("No ingresaste datos validos")
    }
}

const eliminarProducto=(id)=>{
    
    const indice = productos.findIndex((producto)=> producto.id===id)
    if(indice !== -1){
        productos.splice(indice, 1);
    }else{
        alert("No ingresaste datos validos")
    }
}

const eliminarCarrito = (total) => {
    let nombre = prompt("Que producto desea eliminar"+ mostrarCarrito())
    const indice = carrito.findIndex(producto=>producto.nombre===nombre)
    if(indice !== -1){
        total = total - carrito[indice].precio
        carrito.splice(indice, 1);
    }else{
        alert("No ingresaste datos validos")
    }
    return total;
}

const main = ()=> {

    let continuaProceso = true

    while(continuaProceso){
        let comprador = confirm("Es comprador")
        if(comprador){
            compradorMenu();
        }else{
            adminProducts()
        }
        continuaProceso = confirm("Desea continuar con otra transaccion")
    }
}

function validacionSeleccion(opcion){
    opcion = parseInt(opcion)
    if( isNaN(opcion) || opcion < 1 ){
        opcion = alert("No elegiste algo correcto \n")
        return 0;
    }
    
    let producto = productos.find((element)=> element.id === opcion)

    if (!producto){
        alert("El producto no existe")
        return 0;
    }

    agregarProductos({nombre: producto.name, precio: producto.price,imagen: producto.image});
    return producto.price
}


function compradorMenu(){
    let requiereFactura = false
    let seguirComprando = true
    let subtotal = 0;
    let total = 0;

    do {
        let opcion = prompt('selecciona una opcion: \n' + mostrarProductos());
        subtotal = validacionSeleccion(opcion)
        if (subtotal === 0) {
            break;
        }
        total += subtotal
        seguirComprando = confirm("¿Quieres seguir comprando?")
    } while (seguirComprando)

    let eliminar = confirm("Este es tu carrito: "+ mostrarCarrito()+ "\n Desea Modificarlo")

    if (eliminar){
        eliminarCarrito(total)
    }

    requiereFactura = confirm("¿Requiere Factura?")
    if (requiereFactura) {
        total = calculoConImpuesto(total)
    }


    if (requiereFactura){
        alert(mostrarCarrito() + " \nEl total de tus bebidas mas iva es: \n " + total)
    }else{
        alert(mostrarCarrito() + " \nEl total de tus bebidas es: \n " + total)
    }

}


function adminProducts(){
    
    let eliminar = false
    eliminar = confirm("Desea Eliminar un producto")
    if(eliminar) {
        let opcion = parseInt(prompt("Seleccione el producto: " + mostrarProductos()))
        eliminarProducto(opcion)
    }else{
        agregarNuevoProducto();
    }
}

function calculoConImpuesto(subtotal){
    return subtotal * 1.16
}

main()