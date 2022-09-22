var nombre=prompt("Escriba el nombre del usuario");
nombre=nombre.toLowerCase();
nombre=nombre[0].toUpperCase() + nombre.substring(1);
alert("Saludos " + nombre);