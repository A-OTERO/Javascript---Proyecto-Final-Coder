//1ERA ENTREGA

//Utilización de funciones-Salutación

function salutacion(){
    let nombreIngresado = prompt("Ingresar nombre")
    alert("¡Hola "+ nombreIngresado +" !")
}
salutacion();


//Variables y condicionales-Ingreso de datos personales

let direccion = prompt ("Ingrese su dirección");
let ciudadPais = prompt ("Ingrese la ciudad y país de redisencia");
const id = prompt ("Ingrese su número de identificación");
    alert("¡Ya casi estás! Solo resta responder esta pregunta asociada a nuestro nuevo producto");
    let pregunta = prompt("¿Qué provincia de la Argentina es conocida por sus cataratas?")
    let respuesta = "misiones"
    if(respuesta = "misiones"){
        alert("¡No hay problema, pronto habrá nuevas oportunidades!")   
    }else{ 
        alert("¡Correcto! Ya estas participando del sorteo, ¡Felicidades!")
    }


 //Condicionales-Recargo adicional por forma de pago

let pago = prompt("Consulta cuánto es el recargo de tu compra según la forma de pago: efectivo, tarjeta, mercado pago, bitcoins, otros").toLowerCase();

if(pago === "efectivo"){
    alert("Sin recargo adicional");
}else if(pago == "tarjeta"){
    alert("Recargo del 10%");
}else if(pago == "mercado pago"){
    alert("Recargo del 15%");
}else{(pago == "bitcoins");
    alert("Consultar con atención al cliente al email: infocliente@espiritudeluna.com");
} 


//Bucles - Consulta sobre envíos

for (let i=0;i<=5000;i+=2){
    let envío = prompt("Ingresa el monto de tu factura");
    alert("No se hacen envíos" +i);
}



//2DA ENTREGA


//Tema: Arrays
//Participantes del cuestionario relacionado a nuestro producto nuevo
const participantes = ["Julia", "Camila", "Johana", "Lili", "Sofía", "Juan", "Paula","Guadalupe",
 "Mariano", "Martín", "Amalia", "Lola", "Pedro","Mila", "Isabella", "Yolanda", "Benito", "Mónica",
  "Bianca", "Alejo", "Celeste"];
console.log(participantes);

//Como el consurso era para habitantes de CABA, 3 personas quedaron descalificadas: Julia, Bianca y Mónica
participantes.splice(0, 1);
participantes.splice(18, 2);
console.log(participantes);

//Cantidad de personas que participaron durante la primera semana del consurso
console.log(participantes.length);

//Cantidad de personas que participaron durante la segunda semana del consurso
participantes.push("Matilda", "Juana", "Olivia", "Lucas","Sonia","Juanjo", "Tomás", "Martín", "Juan",
"Sol","Nacho", "Valeria", "Elena", "María","Tadeo");
console.log(participantes);

//Cantidad de personas que participaron durante las 2 semanas del concurso (sin considerar las descalificadas)
console.log(participantes.length);


//Tema: Objetos y funciones constructoras
//Datos básicos de nuestros clientes Premium
clientePremiumA ={
    nombre:"Mila", 
    apellido: "Kunis",
    edad: 36,
    lugarDeResidencia:{
        calle: "Levingston Street 700",
        ciudad: "Los Ángeles",
    }
}
console.log(clientePremiumA);

//Creación de una plantilla modelo para ingresar más clientes premium
class clientePremium {
    constructor(nombreCliente, apellidoCliente, edadCliente, calleCliente, ciudadCliente) {
        this.nombre = nombreCliente;
        this.apellido = apellidoCliente;
        this.edad = edadCliente;
        this.lugarDeResidencia = luagrDeResidenciaCliente;
        this.calle = calleCliente;
        this.ciudad = ciudadCliente;
    }
}
    
    const clientePremium1 = new clientePremium ("Mila", "Kunis", 36, "Levingston Street 700", "Los Ángeles");
    console.log(clientePremium1);

    const clientePremium2 = new clientePremium ("Sarah Jessica", "Parker", 56, "London Street 520", "Nueva York");
    console.log(clientePremium2);

    const clientePremium3 = new clientePremium ("Julia", "Roberts", 62, "Constance Avenue 280", "Nueva York");
    console.log(clientePremium3);

    const clientePremium4 = new clientePremium ("Jennifer", "López", 55, "Baltimore Street 1045", "Miami");
    console.log(clientePremium4);

    //Objetos, Funciones constructoras y de orden superior
    //Creación de una plantilla modelo para ingresar los productos del ecommerce:
    class Productos {
    constructor(infoProducto) {
        this.id = infoProducto.idProducto;
        this.clase = infoProducto.claseProducto;
        this.nombre = infoProducto.nombreProducto;
        this.colores = infoProducto.coloresProducto;
        this.precio = infoProducto.precioProducto;
        this.stock = infoProducto.stockProducto;
    }
}
    const infoProducto = [
       {idProducto: "A100",
        claseProducto: "Accesorio",
        nombreProducto: "Candelero Corazón",
        coloresProducto: "blanco",
        precioProducto: 17800,
        stockProducto: 10},
       
        {idProducto: "A101",
        claseProducto: "Accesorio",
        nombreProducto: "Candelero de Rosas",
        coloresProducto: "blanco, negro, azul",
        precioProducto: 10800,  
        stockProducto: 7},
       
        {idProducto: "A102",
        claseProducto: "Accesorio",
        nombreProducto: "Candelero Elegante de Pie",
        coloresProducto: "dorado",
        precioProducto: 40650,  
        stockProducto: 5},

        {idProducto: "A103",
        claseProducto: "Accesorio",
        nombreProducto: "Portavelas de cerámica rústico",
        coloresProducto: "blanco, verde, azul, rojo, amarillo",
        precioProducto: 16950,  
        stockProducto: 5},
    
        {idProducto: "A104",
        claseProducto: "Accesorio",
        nombreProducto: "Portavelas de vidrio",
        coloresProducto: "blanco",
        precioProducto: 25200,  
        stockProducto: 20},

        {idProducto: "A105",
        claseProducto: "Accesorio",
        nombreProducto: "Portavelas con diseños varios",
        coloresProducto: "blanco, negro",
        precioProducto: 40620,  
        stockProducto: 10},
    
        {idProducto: "A106",
        claseProducto: "Accesorio",
        nombreProducto: "Portavelas unidos",
        coloresProducto: "blanco, rosa, dorado",
        precioProducto: 30740,  
        stockProducto: 3},
    
        {idProducto: "A107",
        claseProducto: "Accesorio",
        nombreProducto: "Portavelas campestre",
        coloresProducto: "blanco",
        precioProducto: 16500,  
        stockProducto: 8},

        {idProducto: "F200",
        claseProducto: "Fragancias",
        nombreProducto: "Velas tulipán",
        coloresProducto: "blanco, amarillo, rojo",
        precioProducto: 12750,  
        stockProducto: 10},

        {idProducto: "F201",
        claseProducto: "Fragancias",
        nombreProducto: "Velas lilas",
        coloresProducto: "blanco, lilas",
        precioProducto: 5800,  
        stockProducto: 15},

        {idProducto: "F202",
        claseProducto: "Fragancias",
        nombreProducto: "Velas coco",
        coloresProducto: "blanco, beige",
        precioProducto: 4750,  
        stockProducto: 10},

        {idProducto: "F203",
        claseProducto: "Fragancias",
        nombreProducto: "Velas canela",
        coloresProducto: "blanco, beige",
        precioProducto: 5600,  
        stockProducto: 10},

        {idProducto: "F204",
        claseProducto: "Fragancias",
        nombreProducto: "Velas fresias",
        coloresProducto: "blanco, lila, turquesa",
        precioProducto: 4400,  
        stockProducto: 8},

        {idProducto: "F205",
        claseProducto: "Fragancias",
        nombreProducto: "Velas vainilla",
        coloresProducto: "blanco",
        precioProducto: 7590,  
        stockProducto: 10},

        {idProducto: "F206",
        claseProducto: "Fragancias",
        nombreProducto: "Velas lavanda",
        coloresProducto: "blanco, lila, rosa, fucsia",
        precioProducto: 8200,  
        stockProducto: 10},
    
        {idProducto: "D300",
        claseProducto: "Deco",
        nombreProducto: "Velas orientales",
        coloresProducto: "dorado, plateado, marrón, beige",
        precioProducto: 15850,  
        stockProducto: 10},

        {idProducto: "D301",
        claseProducto: "Deco",
        nombreProducto: "Velas rústicas",
        coloresProducto: "blanco, rosa, beige, fucsia, amarillas",
        precioProducto: 13500,  
        stockProducto: 25},

        {idProducto: "D302",
        claseProducto: "Deco",
        nombreProducto: "Velones rústicos",
        coloresProducto: "azul, celeste, turquesa, rosa, bordó, blanco",
        precioProducto: 5500,  
        stockProducto: 28},

        {idProducto: "D303",
        claseProducto: "Deco",
        nombreProducto: "Velones clásicos elegantes",
        coloresProducto: "blanco",
        precioProducto: 10950,  
        stockProducto: 2},

        {idProducto: "D304",
        claseProducto: "Deco",
        nombreProducto: "Velones sensación de mar",
        coloresProducto: "blanco, verde, celeste, turquesa",
        precioProducto: 9950,  
        stockProducto: 15},

       {idProducto: "P400",
        claseProducto: "Packs Ocasiones Especiales",
        nombreProducto: "Lovecandle",
        coloresProducto: "blanco",
        precioProducto: 50890,  
        stockProducto: 10},

        {idProducto: "P401",
        claseProducto: "Packs Ocasiones Especiales",
        nombreProducto: "Loveflower",
        coloresProducto: "blanco",
        precioProducto: 53280,  
        stockProducto: 20},

        {idProducto: "P402",
        claseProducto: "Packs Ocasiones Especiales",
        nombreProducto: "Olores navideños",
        coloresProducto: "blanco, rojo, verde, dorado",
        precioProducto: 51200,  
        stockProducto: 15},

        {idProducto: "P403",
        claseProducto: "Packs Ocasiones Especiales",
        nombreProducto: "Estrella Navideña",
        coloresProducto: "blanco, rojo, verde, dorado",
        precioProducto: 43500,  
        stockProducto: 10},

        {idProducto: "P404",
        claseProducto: "Packs Ocasiones Especiales",
        nombreProducto: "Navidad clásica",
        coloresProducto: "blanco, rojo, verde, dorado",
        precioProducto: 20470,  
        stockProducto: 15},
]
   //Filtar por precios para que el cliente pueda elegir el monto
    let buscador1 = infoProducto.filter((el) => el.precioProducto < 10000);
    console.log(buscador1);

    //Filtrar por productos de color fucsia
    let buscador2 = infoProducto.filter((el) => el.coloresProducto.includes("fucsia"));
    console.log(buscador2);

    //Filtrar por productos en stock - punto de equilibrio lo designo en 6 unidades
    let buscador3 = infoProducto.filter((el) => el.stockProducto < 7);
    console.log(buscador3);

    //Consulta si queda en stock el producto "Navidad clásica"
    let buscador4 = infoProducto.some((el)=> el.nombreProducto == "Navidad clásica");
    console.log(buscador4);
   
    //Consulta de unidades que quedan en stock de "Navidad clásica"
    let buscador5 = infoProducto.filter((el)=> el.nombreProducto == "Navidad clásica");
    console.log(buscador5);

    //Consulta si hay algun producto que lleve en su nombre la palabra "orientales"
    let buscador6 = infoProducto.find((el)=> el.nombreProducto = "orientales");
    console.log(buscador6);

   
    //Ordenar productos desde el más barato al más caro
    let buscador7 = precioProducto.sort((a, b) => a-b);
    console.log(buscador7);

    //Los importes de los productos llevan IVA incluido. Calcular el neto gravado sin impuesto
    let buscador8 = function Iva(precioProducto) {
        return precioProducto/1.21;
    }
    console.log(buscador8);