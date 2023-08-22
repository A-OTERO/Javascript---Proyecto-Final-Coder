
//Lista de productos

//Función constructura
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

//Productos creados
export const infoProducto = [
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

//Almacenar datos en storage
JSON.parse(localStorage.getItem("InfoProducto")) || localStorage.setItem("productos", JSON.stringify(infoProducto));
