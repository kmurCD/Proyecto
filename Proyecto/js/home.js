function capturarNombre() {
    // Obtener los valores ingresados por el usuario
    const nameID = document.getElementById("nameID").value;
    const lastName = document.getElementById("lastName").value;
  
    // Crear una URL con los parámetros de nombre y apellido
    const url = `calendario.html?nameID=${(nameID)}&lastName=${(lastName)}`;
  
    // Redirigir a la página del calendario
    window.open(url);
  }