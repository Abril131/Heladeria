const jonson = require("../Index.json");

var Psabor, Pcono, Pdecoracion, Nsabor, Ncono, Ndecoracion;

// Se hace llamada de la siguiente funcion en el onclick del boton "FINALIZAR"
function realizarOperaciones(){
    cantidad = jonson.cantidad;
    obtenerInfoSabor();
    obtenerInfoCono();
    obtenerInfoDecoracion();

    totalPre = Psabor + Pcono + Pdecoracion;
    total = totalPre * cantidad;

    $query = `INSERT INTO ventas_menu (id_ventas, cantidad_helados, helado_sabor, cono_tipo, decoracion) VALUES = (0,'${cantidad}','${Nsabor}','${Ncono}','${Ndecoracion}');`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            // Ingresar alerta de completado
            alert("pedido realizado");
        }
    });

}

function obtenerInfoSabor(){
    var ID_SaborB = jonson.ID_sabor;

    $query = `SELECT nombre, precio FROM helado WHERE id_helado = '${ID_SaborB}';`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            Nsabor = rows[0].nombre;
            Psabor = rows[1].precio;
        }
    });
}

function obtenerInfoCono(){
    var ID_ConoB = jonson.ID_Cono;

    $query = `SELECT nombre, precio FROM cono WHERE id_cono = '${ID_ConoB}';`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            Ncono = rows[0].nombre;
            Pcono = rows[1].precio;
        }
    });
}

function obtenerInfoDecoracion(){
    var ID_DecoracionB = jonson.ID_Decoracion;

    $query = `SELECT nombre, precio FROM decoracion WHERE id_decoracion = '${ID_DecoracionB}';`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            Ndecoracion = rows[0].nombre;
            Pdecoracion = rows[1].precio;
        }
    });
}



/*
function obtenerInfoPedido(){
  var cantidad = jonson.ID_cantidad;

  // Modificar el Query
  $query = `SELECT sabor, ,contrasena,puesto FROM empleado WHERE usuario = '${Usuario}' AND contrasena = '${Contrasena}';`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            // REALIZAR LAS OPERACIONES CON LOS DATOS DEL JSON 
        }
    });
}
*/