let jonsonarchivo = require("../Index.json");

function opera(){
    const conexion = require("../conectar")
    var precioc=0; 
    var preciod=0; 
    var precioh=0; 
    var nombrec=""; 
    var nombred=""; 
    var nombreh="";
 
    var cantidad = jonsonarchivo.ID_cantidad;

    // Asigna a variable "ID_SaborB" el valor guardado como "ID_sabor" que se encuentra en el JSON
    var ID_SaborB = parseInt(jonsonarchivo.ID_sabor);

    // Parte de obtencion datos del sabor en la DB
    $query = `SELECT nombre,precio FROM helado WHERE id_helado ='${ID_SaborB}';`;
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
            console.log(nombreh);

            // Asigna a variable "ID_ConoB" el valor guardado como "ID_cono" que se encuentra en el JSON
            var ID_ConoB = parseInt(jonsonarchivo.ID_cono);

            // Parte de obtencion de datos del cono en la DB
            $query = `SELECT nombre,precio FROM cono WHERE id_cono = '${ID_ConoB}';`;
            conexion.query($query, function(err, rows, fields){
                if(err){
                    console.log("Error en el query");
                    console.log(err);
                    return;
                }else{

                    // Asignacion de valores con respecto del cono del helado
                    nombrec = rows[0].nombre;
                    precioc = rows[0].precio;
                    
                    // Asigna a variable "ID_DecoracionB" el valor guardado como "ID_decoracion" que se encuentra en el JSON
                    var ID_DecoracionB = parseInt(jonsonarchivo.ID_decoracion);

                    // Parte de obtencion de datos de la decoracion en la DB
                    $query = `SELECT nombre,precio FROM decoracion WHERE id_decoracion = '${ID_DecoracionB}';`;
                    conexion.query($query, function(err, rows, fields){
                        if(err){
                            console.log("Error en el query");
                            console.log(err);
                            return;
                        }else{
                            // Asignacion de valores con respecto de la decoracion del helado
                            nombred = rows[0].nombre;
                            preciod = rows[0].precio;

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

                            // Subida de datos de la venta a la DB
                            $query = `INSERT INTO ventas_menu values(0,'${cantidad}','${nombreh}','${nombrec}','${nombred}','${total}')`;
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
                    });
                }
            });           
        }
    });
}

opera();
