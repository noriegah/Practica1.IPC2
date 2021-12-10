
function capturaLogin() {
    const corre=document.getElementById("nomlogin").value;
    const pass=document.getElementById("passlogin").value;
    console.log(corre);
    console.log(pass);
}

function capturaRegistro() {
    const nom=document.getElementById("nomreg").value;
    const correo=document.getElementById("correg").value;
    const pass1=document.getElementById("passreg1").value;
    const pass2=document.getElementById("passreg2").value;
    console.log(nom);
    console.log(correo);
    console.log(pass1);
    console.log(pass2);

    if(pass1==pass2){
        console.log("Registro Exitoso");
    }else{
        console.log("Las contraseñas no coinciden, Fallo en el registro");
    }
}

function capturaIngreso() {
    const nom=document.getElementById("nomingreso").value;
    const apellido=document.getElementById("apellidoingreso").value;
    const cui=document.getElementById("cuingreso").value;
    const depa=document.getElementById("depaingreso").value;
    console.log(nom);
    console.log(apellido);
    console.log(cui);
    console.log(depa);
        console.log("Ingreso de Cliente Exitoso");
}

