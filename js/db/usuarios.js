//Creación de usuario administrador
export let usuarios = [
    {
      id: 1,
      user: "Alicia",
      pass: "012345",
      admin: true,
    },
  ];

 ////Almacenar datos en storage
JSON.parse(localStorage.getItem("usuarios")) || localStorage.setItem("usuarios", JSON.stringify(usuarios));
