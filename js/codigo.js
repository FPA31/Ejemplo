/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ingresar() {
    var usuario = document.getElementById("usuario").value;
    var contrasenha = document.formu.contrasenha.value;
    if (usuario.length === 0) {
        alert("campo usuario vacio");
        document.getElementById("usuario").value = "";
        document.getElementById("usuario").focus();
        return false;
    }
    
    if (!(usuario === "admin")) {
        alert("usuario invalido");
        document.getElementById("usuario").value = "";
        document.getElementById("usuario").focus();
        return false;
    }
    
    if (contrasenha.length === " ") {
        alert("contraseña no puede estar vacio");
        document.getElementById("contrasenha").value = "";
        document.getElementById("contrasenha").focus();
        return false;
    }
    
    if (!(contrasenha === "123")) {
        alert("contraseña incorrecto");
        document.getElementById("contrasenha").value = "";
        document.getElementById("contrasenha").focus();
        return false;
    }
}

