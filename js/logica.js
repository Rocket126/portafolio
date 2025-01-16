function validar(){
    let correo = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    let mensajeEnviado = document.getElementById("mensajeEnviado");
    let nombre = document.getElementById("nombre").value;
  
    

    try {
        if(nombre ==="")
        {
            throw "El Campo nombre esta vacio. completelo"
        }
        if(nombre.length <=5)
        {
            throw "Escriba un nombre completo"
        }
        if(nombre.length >=40)
        {
            throw "El nombre es muy largo. Ingrese un Nombre y Apellido"
        }
        if(correo.length <=5)
        {
            throw "Debe insertar un correo correctamente";
        }
        if(mensaje.length <=5)
        {
            throw "El Mensaje no debe ser menor a 5 caracteres";
        }
        if(mensaje.length >=70)
        {
            throw "El mensaje no debe superar los 70 caraceters";
        }

        if(correo=="")
        {
            throw "Debe ingresar un correo";
        }
        if(mensaje=="")
        {
            throw "Mensaje no debe estar vacio";
        }

       
      
       alert("Mensaje enviado!. Te contactaré pronto.");
       mensajeEnviado.style.display="block"; 
       document.getElementById("nombre").value = "";
       document.getElementById("email").value = "";
       document.getElementById("mensaje").value = "";

    } catch (error) {
        alert(error);
    }
    

}

