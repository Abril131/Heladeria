var ids = "";
function precioSeleccion(comp) {
    ids = "";
    ids = comp.value;
}

function conoSeleccion() {
    let jonsonarchivo = require("../Index.json");

    try {
        const jonson = require('../Crearjason');
        if (ids != "") {
            console.log(ids);
            var datos2 = {
                ID_cantidad: jonsonarchivo.ID_cantidad,
                ID_sabor: jonsonarchivo.ID_sabor,
                ID_cono: ids
            };
            jonson.GuardarJson(datos2).then((err, res) => {
                try {
                    leer = require("../Index.json")
                    location.href = "../HTMLS/empleadoDecoracion.html";
                }
                catch {
                    jonson.GuardarJson(datos2);
                }
            });
        } else {
            const Swal = require('sweetalert2');
            Swal.fire({
                background: 'rgba(0, 0, 0, 0.9)',
                icon: 'error',
                title: 'No se ha seleccionado ningún cono',
                text: 'Porfavor ingrese un cono para continuar',
                color: 'white',
            })
        }
    }
    catch {
        console.log("no")
    }
};