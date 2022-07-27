
var ids = "";

/**
 * Método precioSeleccion lo que hace es obtener el valor (value) del boton que acciona el evento del onclick
 */
function precioSeleccion(comp) {
    ids = "";
    ids = comp.value;
}

function saborSeleccion() {
    const Swal = require('sweetalert2');
    try {
        const jonson = require('../Crearjason');

        let cantidad = document.getElementById("cantidad").value;
        if (ids != "" && cantidad > 0) {
            var datos = {
                ID_cantidad: cantidad,
                ID_sabor: ids
            };
            jonson.GuardarJson(datos).then((err, res) =>{
                console.log("\nPRECIO SELECCIONADO");
                console.log("El ID es: " + ids);
                console.log("AGREGADO");
    
                try{
                    leer = require("../Index.json")
                    location.href = "../HTMLS/empleadoCono.html";
                }
                catch{
                    jonson.GuardarJson(datos);
                }

            });

        } else {
            if(ids == "" && cantidad<1){
                Swal.fire({
                    background: 'rgba(0, 0, 0, 0.9)',
                    icon: 'error',
                    title: 'No se ha seleccionado cantidad ni sabor',
                    text: 'Porfavor ingrese una catidad y un sabor valido para continuar',
                    color: 'white',
                })
            }else if(cantidad<1){
                Swal.fire({
                    background: 'rgba(0, 0, 0, 0.9)',
                    icon: 'error',
                    title: 'No se ha seleccionado cantidad',
                    text: 'Porfavor ingrese una cantidad valida para continuar',
                    color: 'white',
                })
            }else if(ids==""){
                Swal.fire({
                    background: 'rgba(0, 0, 0, 0.9)',
                    icon: 'error',
                    title: 'No se ha seleccionado ningún sabor',
                    text: 'Porfavor ingrese un sabor para continuar',
                    color: 'white',
                })
            }
        }

    }
    catch {
        console.log("no")
    }
}