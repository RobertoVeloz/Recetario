$(document).ready(function(){
    $("#formRegistro").validate({
        rules:{
            nombre:{
                required:true
            },
            paterno:{
                required:true
            },
            materno:{
                required:true
            },
            edad:{
                required:true,
                minlenght:2
            },
            correo:{
                required:true,
                email:true
            },
            ocupacion:{
                required:true
            },
            clave:{
                required:true
            }
        }
    });
});


