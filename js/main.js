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
