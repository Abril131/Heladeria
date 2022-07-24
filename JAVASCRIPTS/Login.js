//const conexion = require('../conectar');
//const Swal = require('sweetalert2');

// Función que valida el acceso de los usuarios
function ValidacionE(){
    const conexion = require('../conectar');
    var Usuario=document.getElementById("user").value;
    var Contrasena=document.getElementById("password").value;
    let texto;
    $query = `SELECT nombre,usuario,contrasena,puesto FROM empleado WHERE usuario = '${Usuario}' AND contrasena = '${Contrasena}';`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            var long = rows.length;
            if (long == 0) {
                //alert("Dato no encontrado")
                texto="Usuario o contraseña incorrectos"
                document.getElementById("validacion").innerHTML=texto;
            }
            else {
                console.log("toodo bien", rows, fields)
                const long = rows.length;
                for (let i = 0; i < long; i++) {
                    const valid = rows[i].puesto;
                    if(valid=="Supervisor"){
                        let nombre = rows[i].nombre;
                        $query = `UPDATE nombres SET nombre=('${nombre}') WHERE id_nombre=1;`;
                        //$query = `INSERT INTO nombres values('${nombre}')`;
                        conexion.query($query, function(err, rows, fields){
                            if(err){
                                console.log("Error en el query");
                                console.log(err);
                                return;
                            }else{
                                location.href=("../HTMLS/adm.html");
                            }});
                    }else{
                        let nombre = rows[i].nombre;
                        $query = `UPDATE nombres SET nombre=('${nombre}') WHERE id_nombre=1;`;
                        //$query = `INSERT INTO nombres values('${nombre}')`;
                        conexion.query($query, function(err, rows, fields){
                            if(err){
                                console.log("Error en el query");
                                console.log(err);
                                return;
                            }else{
                                location.href=("../HTMLS/sabor.html");
                            }});
                    }
                    const element = rows[i];
                    console.log(element);
                }
            }
        }
    });
}

// Función que permite la visualización del nombre del usuario en los HTML
function nombreE(){
    const conexion = require('../conectar');
    let texto;
    $query = `SELECT nombre FROM nombres;`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            texto=rows[0].nombre
            document.getElementById("empleadoN").innerHTML=texto;
        }});
}

// Función que se ejecuta con el botón de cerrar sesión
/*function cerrarSesion(){
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
            location.href=("../HTMLS/Home1.html");
        }
    })
}*/

// Función que se ejecuta con los botones cancelar
function cancelar(){
    const Swal = require('sweetalert2');
    Swal.fire({
        title: '¿Desea cancelar la selección de elementos del pedido?',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        background: 'rgba(0, 0, 0, 0.9)',
        cancelButtonColor: 'rgba(228, 23, 23, 0.863)',
        color: 'white',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
    }).then((result) => {
        if (result.isConfirmed) {
            location.href=("../HTMLS/sabor.html");
        }
    })
}