/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validar() {
    var usuario = $("#usuario").val();
    var contrasena = $("#contrasena").val();

    if (usuario == null || usuario.length == 0) {
        alert("El usuario no debe quedar vacio");
        $("#usuario").focus();
        return false;
    } else {
        if (!/^([a-z A-Z])*$/.test(usuario)) {
            alert("El usuario solo debe contener letras");
            $("#usuario").val("");
            $("#usuario").focus();
            return false;
        } else {
            if (usuario != "fabio") {
                alert("El usuario es incorrecto");
                $("#usuario").val("");
                $("#usuario").focus();
                return false;
            } else {
                if (contrasena == null || contrasena.length == 0) {
                    alert("La contrasena no debe quedar vacia");
                    return false;
                } else {
                        if (contrasena != "paredes") {
                            alert("contrasena incorrecta");
                            $("#contrasena").val("");
                            $("#contrasena").focus();
                            return false;
                        } else {
                            return true;
                        }
                    }
                }
            }
        }
    }






