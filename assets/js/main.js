$(function() {

    $('[ data-bs-toggle="tooltip"]').tooltip();

    $('#correo').click(function() { //esto es para cuando le doy click a mi boton aparezca una ventana
        alert("Ingrese sus datos")
    })
    $('body').on('dblclick', 'h1', function() { //esto es para cambiarle el color a el titulo haciendo doble click en el
        $(this).css("color", "green");
    });
});