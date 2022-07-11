const conexion = require('./conectar');
function ValidacionE(){
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
                /*Swal.fire({
                    title: 'Error!',
                    icon: 'error',
                    text: 'Do you want to continue',
                    confirmButtonText: 'Cool',
                    html: '<b class="rojo">hola</b>',
                    costumClass: {
                        popup: 'popup_class',
                    }
                    
                        
                })*/
            }
            else {
                console.log("toodo bien", rows, fields)
                const long = rows.length;
                for (let i = 0; i < long; i++) {
                    const valid = rows[i].puesto;
                    if(valid=="Gerente"){
                        let nombre = rows[i].nombre;
                        $query = `UPDATE nombres SET nombre=('${nombre}') WHERE id_nombre=1;`;
                        //$query = `INSERT INTO nombres values('${nombre}')`;
                        conexion.query($query, function(err, rows, fields){
                            if(err){
                                console.log("Error en el query");
                                console.log(err);
                                return;
                            }else{
                                location.href=("adm.html");
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
                                location.href=("sabor.html");
                            }});
                        //nombreE();
                    }
                    const element = rows[i];
                    console.log(element);
                }
            }
        }
    });
}

function nombreE(){
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