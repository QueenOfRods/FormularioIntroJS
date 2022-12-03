function Validarcampos(){
    nombre = document.getElementById("txtnombreusuario").value;
    apodo = document.getElementById("campoapodo").value;
    Contraseña1 = document.getElementById("Pass1").value;
    Contraseña2 = document.getElementById("Pass2").value;

    if(txtnombreusuario.value == ""){
        alert ("Porfavor ingresa un nombre");
    }
    if(campoapodo.value == ""){
        alert("Porfavor ingresa un apodo");
    }

    if(Pass1.value!=Pass2.value){
        alert("Las contraseñas no coinciden");
    }
}