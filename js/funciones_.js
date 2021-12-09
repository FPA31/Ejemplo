function comprar($this) {
//    console.log("$this --> "+$this.html());
//trae cuando se le da click en el boton comprar de include/buscar.php y trae el primer input que es el id()0 el segundo 
//que es la cantidad(1), el tercero que es el precio(2)en forma de val y también el h3 como html o text que es el titulo 

    var $producto = $this.parent().parent();
    var id = $producto.find("input").eq(0).val();
    var titulo = $producto.find("h3").eq(0).text();
    var cantidad = $producto.find("input").eq(1).val();
    var precio = $producto.find("input").eq(2).val();
    
    console.log("id -->" + id);
    console.log("titulo --> " + titulo);
    console.log("cantidad --> " + cantidad);
    console.log("precio -->" + precio);
    
    $("#id").val(id);
    $("#titulo").val(titulo);
    $("#cantidad").val(cantidad);
    $("#precio").val(precio);
    $("#formPedido").submit();
}
function spinner() {
    $('.spinner .btn:first-of-type').on('click', function () {
        var $input = $(this).parent().parent().find("input");
        var actual = parseInt($input.val(), 10);
        $input.val(actual + 1);
        modificar($input);
    });
    $('.spinner .btn:last-of-type').on('click', function ($this) {
        var $input = $(this).parent().parent().find("input");
        var actual = parseInt($input.val(), 10);
        if (actual > 1) {
            $input.val(actual - 1);
             modificar($input);
        }
    });
}
function eliminar($this) {
//    trae los datos correspondiente al boton eliminar...el ultimo dato.
    console.log("-->prueba de que trae datos de html en este caso el del basurerito" + $this.html());
    var id = $this.parent().parent().find("td").eq(0).html();
    console.log("-->" + id);
    $("#id").val(id);
    $("#cantidad").val("0");
    $("#operacion").val("eliminar");
    $("#formPedido").submit();
}
function modificar($this) {
    var id = $this.parent().parent().parent().parent().find("td").eq(0).html();
    var cantidad = $this.parent().parent().parent().parent().find("td").eq(2).find("div").find("input").val();
    console.log("-->" + id);
    $("#id").val(id);
    $("#cantidad").val(cantidad);
    $("#operacion").val("modificar");
    $("#formPedido").submit();
}

function validarCompra() {
    $("#mensaje").fadeOut("slow");//hace que el cuadro de alerta desaparezca cuando los campos con cargados correctamente.
    var email = $("#email").val();
    var nombre = $("#nombre").val();
    var direccion = $("#direccion").val();
    var telefono = $("#telefono").val();
    if (email === "") {
        $("#mensaje").html("Email está vacio!!");
        $("#mensaje").fadeIn("slow");
        $("#email").focus();
    } else if (nombre === "") {
        $("#mensaje").html("Nombre está vacio!!");
        $("#mensaje").fadeIn("slow");
        $("#nombre").focus();
    } else if (direccion === "") {
        $("#mensaje").html("Dirección está vacio!!");
        $("#mensaje").fadeIn("slow");
        $("#direccion").focus();
    } else if (telefono === "") {
        $("#mensaje").html("Teléfono está vacio!!");
        $("#mensaje").fadeIn("slow");
        $("#telefono").focus();
    } else if ((email.indexOf("@") < 1) || (email.indexOf(".") < 2)) {
        $("#mensaje").html("Email incorrecto!!");
        $("#mensaje").fadeIn("slow");
        $("#email").focus();
    } else {
        $("#formDatosComprador").submit();
    }
}