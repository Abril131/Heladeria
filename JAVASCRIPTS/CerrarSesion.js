function cerrarSesion() {
    const Swal = require('sweetalert2');
    Swal.fire({
        title: '¿Desea volver al inicio de sesión?',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        background: 'rgba(0, 0, 0, 0.9)',
        cancelButtonColor: 'rgba(228, 23, 23, 0.863)',
        color: 'white',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
    }).then((result) => {
        if (result.isConfirmed) {
            location.href = ("../HTMLS/Login.html");
        }
    })
}