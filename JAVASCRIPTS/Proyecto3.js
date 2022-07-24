const Swal = require('sweetalert2');


// Crear una tabla en la base de datos que almacene los datos recopilados a traves del proceso de selección
/**          ____________________________________________________________________________
 *          |  cantidad  | precio_sabor |  precio_cono  |  precio_decoracion   |  Total  |
 *          |------------|--------------|---------------|----------------------|---------|
 *          |      x     |     xx.x     |      xx.x     |          xx.x        |   xx.x  |
 *           ----------------------------------------------------------------------------
 *  
 *   - Lo que se hará es hacer una seleccion del precio_sabor, precio_cono, precio_decoracion y se hará la
 *     respectiva suma, luego se hará por a parte una seleccion de la cantidad y ese numero de cantidad se
 *     multiplicará al resultado de la suma.
 * 
 */

 //var Psabor=0, Pcono=0, Pdecoracion=0, Nsabor=0, Ncono=0, Ndecoracion=0;

var ids = "";
function precioSeleccion(comp) {
    ids = "";
    ids = comp.value;
}

function decoracionSeleccion() {
    let jonsonarchivo = require("../Index.json");
    const jonson = require('../Crearjason');
    
    try {
        console.log(ids);
        // Si no elije decoración
        if(ids == ""){
            ids = "0";
        }
        var datos3 = {
            ID_cantidad: jonsonarchivo.ID_cantidad,
            ID_sabor: jonsonarchivo.ID_sabor,
            ID_cono: jonsonarchivo.ID_cono,
            ID_decoracion: ids
        };
        jonson.GuardarJson(datos3).then((err, res) =>{
            console.log("El id del cono es: " + ids);
            console.log(datos3);
            console.log(jonsonarchivo);
            opera(datos3);
        });
    }
    catch {
        console.log("no funciono");
    }
};

function opera(datos3){
    const conexion = require("../conectar")
    var precioc=0; 
    var preciod=0; 
    var precioh=0; 
    var nombrec=""; 
    var nombred=""; 
    var nombreh="";
    var id_H=0;
    var id_C=0;
    var id_D=0;

    //var cantidad = jonsonarchivo.ID_cantidad;
    var cantidad = datos3.ID_cantidad;
    // Asigna a variable "ID_SaborB" el valor guardado como "ID_sabor" que se encuentra en el JSON
    var ID_SaborB = parseInt(datos3.ID_sabor);

    // Parte de obtencion datos del sabor en la DB
    $query = `SELECT id_helado,nombre,precio FROM helado WHERE id_helado ='${ID_SaborB}';`;
    console.log("11111");
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{

            // Asignacion de valores con respecto al sabor del helado
            nombreh = rows[0].nombre;
            precioh = rows[0].precio;
            id_H = rows[0].id_helado;
            console.log(nombreh);

            // Asigna a variable "ID_ConoB" el valor guardado como "ID_cono" que se encuentra en el JSON
            var ID_ConoB = parseInt(datos3.ID_cono);

            // Parte de obtencion de datos del cono en la DB
            $query = `SELECT id_cono,nombre,precio FROM cono WHERE id_cono = '${ID_ConoB}';`;
            conexion.query($query, function(err, rows, fields){
                if(err){
                    console.log("Error en el query");
                    console.log(err);
                    return;
                }else{

                    // Asignacion de valores con respecto del cono del helado
                    nombrec = rows[0].nombre;
                    precioc = rows[0].precio;
                    id_C = rows[0].id_cono;
                    
                    // Asigna a variable "ID_DecoracionB" el valor guardado como "ID_decoracion" que se encuentra en el JSON
                    var ID_DecoracionB = parseInt(datos3.ID_decoracion);

                    // Parte de obtencion de datos de la decoracion en la DB
                    $query = `SELECT id_decoracion,nombre,precio FROM decoracion WHERE id_decoracion = '${ID_DecoracionB}';`;
                    conexion.query($query, function(err, rows, fields){
                        if(err){
                            console.log("Error en el query");
                            console.log(err);
                            return;
                        }else{
                            // Asignacion de valores con respecto de la decoracion del helado
                            nombred = rows[0].nombre;
                            preciod = rows[0].precio;
                            id_D = rows[0].id_decoracion;
                            /**
                             * A continuacion con los valores de los precios del helado, decoracion y cono
                             * se hará una suma para obtener el valor total con respecto a un solo cono;
                             * posteriormente ese total se multiplicará por la cantidad de helados pedidos.
                             * Ese total obtenido se envía a la DB como total del pedido del cliente.
                             */
                            let totalPre = precioc + preciod + precioh;
                            let total = totalPre * cantidad;
                            console.log(totalPre);
                            console.log(precioh);

                            if(preciod == 0){ // Alerta para el guardado de los datos del pedido en la DB cuando NO hay decoracion
                                Swal.fire({
                                    title: '¿Su pedido es: ' + cantidad + ' de ' + nombreh + ' con ' + nombrec + " " + nombred,
                                    showCancelButton: true,
                                    confirmButtonText: 'SI',
                                    background: 'rgba(0, 0, 0, 0.9)',
                                    cancelButtonColor: 'rgba(228, 23, 23, 0.863)',
                                    color: 'white',
                                    cancelButtonText: 'NO',
                                    confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
                                }).then((result) => {
                                    if (result.isConfirmed) { // Si le da que sí
                                        $query = `INSERT INTO ventas_menu values(0,'${cantidad}','${nombreh}','${id_H}','${nombrec}','${id_C}','${nombred}','${id_D}','${total}')`;
                                        conexion.query($query, function(err, rows, fields){
                                            if(err){
                                                console.log("Error en el query");
                                                console.log(err);
                                                return;
                                            }else{
                                                var n = 0;
    
                                                Swal.fire({
                                                    title:'¡PEDIDO REALIZADO!' + "\n" + "Se redijirá la página en 5 segundos", 
                                                    icon:'success',
                                                    background:'rgba(0, 0, 0, 0.9)',
                                                    color: 'white',
                                                    confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
                                                }).then((result) =>{
                                                    if(result.isConfirmed){
                                                        location.href = "../HTMLS/sabor.html";
                                                    }
                                                })
                
                                                // Temporizador de 5 segundos
                                                window.setInterval(function(){
                                                  n++;
                                                  if(n==5){
                                                    location.href = "../HTMLS/sabor.html";
                                                  }
                                                },1000);
                                            }
                                        });
                                    } else if (result.dismiss == 'cancel') { // Cuando seleccione cancelar
                                        var n = 0;
    
                                      Swal.fire({
                                        title: 'PEDIDO CANCELADO'  + "\n" + "Se redijirá la página en 5 segundos",
                                        icon: 'error',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white',
                                        confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
                                      }).then((result) =>{
                                        if(result.isConfirmed){
                                            location.href = "../HTMLS/sabor.html";
                                        }
                                      })
    
                                      // Temporizador de 5 segundos
                                      window.setInterval(function(){
                                        n++;
                                        if(n==5){
                                            location.href = "../HTMLS/sabor.html";
                                        }
                                      },1000);
                                    }
                                })
                            }else{ // Alerta para el guardado de los datos del pedido en la DB cuando hay decoracion
                                Swal.fire({
                                    title: '¿Su pedido es: ' + cantidad + ' de ' + nombreh + ' con ' + nombrec + ' con decoracion de ' +nombred + '?',
                                    //showDenyButton: true,
                                    showCancelButton: true,
                                    confirmButtonText: 'SI',
                                    background: 'rgba(0, 0, 0, 0.9)',
                                    cancelButtonColor: 'rgba(228, 23, 23, 0.863)',
                                    color: 'white',
                                    cancelButtonText: 'NO',
                                    confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
                                }).then((result) => {
                                    if (result.isConfirmed) { // Si le da que sí
                                        $query = `INSERT INTO ventas_menu values(0,'${cantidad}','${nombreh}','${id_H}','${nombrec}','${id_C}','${nombred}','${id_D}','${total}')`;
                                        conexion.query($query, function(err, rows, fields){
                                            if(err){
                                                console.log("Error en el query");
                                                console.log(err);
                                                return;
                                            }else{
                                                var n = 0;
    
                                                Swal.fire({
                                                    title:'¡PEDIDO REALIZADO!' + "\n" + "Se redijirá la página en 5 segundos", 
                                                    icon:'success',
                                                    background:'rgba(0, 0, 0, 0.9)',
                                                    color: 'white',
                                                    confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
                                                }).then((result) =>{
                                                    if(result.isConfirmed){
                                                        location.href = "../HTMLS/sabor.html";
                                                    }
                                                })
                
                                                // Temporizador de 5 segundos
                                                window.setInterval(function(){
                                                  n++;
                                                  if(n==5){
                                                    location.href = "../HTMLS/sabor.html";
                                                  }
                                                },1000);
                                            }
                                        });
                                    } else if (result.dismiss == 'cancel') { // Cuando seleccione cancelar
                                        var n = 0;
    
                                      Swal.fire({
                                        title: 'PEDIDO CANCELADO'  + "\n" + "Se redijirá la página en 5 segundos",
                                        icon: 'error',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white',
                                        confirmButtonColor: 'rgba(154, 40, 207, 0.568)',
                                      }).then((result) =>{
                                        if(result.isConfirmed){
                                            location.href = "../HTMLS/sabor.html";
                                        }
                                      })
    
                                      // Temporizador de 5 segundos
                                      window.setInterval(function(){
                                        n++;
                                        if(n==5){
                                            location.href = "../HTMLS/sabor.html";
                                        }
                                      },1000);
                                    }
                                })
                            }
                        }
                    });
                }
            });           
        }
    });
}