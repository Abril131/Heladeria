const conexion = require('./conectar');

// $query = `INSERT INTO Usuario (name) VALUES ('${name}')`;

function login(){
    var nombre = document.getElementById("nombreowo").value;
    var pass = document.getElementById("apowo").value;

    $query = `INSERT INTO alumnos values(0,'${nombre}','${pass}')`;
    conexion.query($query, function(err,rows){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }
        console.log("Inrgeso correcto");
    });
}

//const conexion = require('./conectar.js');

/*function agregarDatos() {
    var nombre = document.getElementById("nombreowo").value;
    var apellido = document.getElementById("apowo").value;
    //var edad=document.getElementById("txtEdad").value;

    //$query = `INSERT INTO Usuario (id, nombre) VALUES (0,'${nombre}')`;
    $query = `INSERT INTO alumnos VALUES (0,'${nombre}','${apellido}')`;
    conexion.query($query, function(err, rows){
        if(err){
            console.log("error en el query");
            console.log(err);
            return;
        }
        console.log("ejecutado correctamente");
    });
}*/

/*var conection = require('./conectar');

function CargarDatos(){
    var name = document.getElementById("nombreowo").value;
    //$query = `INSERT INTO alumnos (id_alumno,nombre) VALUES (0, '${name}')`;
    //$query = `INSERT INTO alumnos VALUES (0, '${name}')`;
    $query = `INSERT INTO alumnos VALUES (0,'${name}')`;
    conection.query($query, function (err, rows) {
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }
        console.log("ejecutado bien", rows);
    });
}*/

/*function select(){
    $query = `SELECT * FROM alumnos`;
    conexion.query($query, function(err, rows){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }
        console.log("toodo bien", rows);
    });
}*/
function select(){
    $query = `SELECT * FROM alumnos;`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }
        console.log("todo bien", rows);

        const long = rows.length;
        var cadena;
        for(i=0;i<long;i++){
            cadena += '\n'+ rows[i].id_alumnos + ' ' + rows[i].nombre + ' ' + rows[i].apellido + '\n';
        }
        alert(cadena);
    });
}

function MostrarP(){
    var TableR=document.getElementById("table");
    $query = `SELECT * FROM alumnos;`;
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }
        console.log("todo bien", rows);

        const long = rows.length;
        //var cadena;
        console.log(long);
        for(i=0;i<long;i++){
            //cadena += '\n'+ rows[i].id_alumnos + ' ' + rows[i].nombre + ' ' + rows[i].apellido + '\n';
            var newRow = TableR.insertRow(-1);

            var celdaId = newRow.insertCell(0);
            var celdaUsuario = newRow.insertCell(1);
            var celdaApellido = newRow.insertCell(2);

            var textoId = document.createTextNode(rows[i].id_alumnos);
            var textoUsuario = document.createTextNode(rows[i].nombre);
            var textoApellido = document.createTextNode(rows[i].apellido);

            celdaId.appendChild(textoId);
            celdaUsuario.appendChild(textoUsuario);
            celdaApellido.appendChild(textoApellido);
        }
        //alert(cadena);
    });
}
/*
buscar
id="buscacdor"
Select name from mytable1 where name = "${buscar}";

Alter table para modificar la tabla (agregar columna)
alter tablen nametable add column password varchar(15)

Agrega una nueva columna a la tabla x, la columna es pawsword un tipo de dato varchar
*/
/*
function buscarDatos() {
  var valorBuscado=document.getElementById("txtBuscar").value;
  var tablaR=document.getElementById("tabla1");
  $query = `Select name, rol from mytable1 where name='${valorBuscado}';`//instrucción SQL  
  conexion.query($query, function (err, rows) {
  if (err) {
      console.log("error en el query");
      console.log(err);
      return;
  }
  else{
      console.log("ejecutado correctamente", rows);//Se imprime lo que se extrae de la BD, queda guardado en ROWS
      var long = rows.length;//Se obtiene el tamaño de la lista
      if(long>0){
        for(i=0 ; i<long ; i++){//Se utiliza para recorrer la lista
          //cadena += rows[i].id + ' ' + rows[i].name + '\n';//Se forma el registro 
          var newRow   = tablaR.insertRow(-1);
          var celdaId  = newRow.insertCell(0);
          var celdaUsuario  = newRow.insertCell(1);
          var textoUsuario  = document.createTextNode(rows[i].name);
          var textoRol  = document.createTextNode(rows[i].rol);
          celdaId.appendChild(textoUsuario);  
          celdaUsuario.appendChild(textoRol);   
        }  
      }
      else{ alert ("Datos no encontrados");}
    }
  });
}
*/ 
function Buscar(){

    var brr=document.getElementById("buscador").value;
    
    $query = `SELECT * FROM alumnos WHERE nombre = '${brr}';`;
    //$query = `SELECT * from alumnos where nombre=('${brr}');`;//name='${valorBuscado}';`
    var TableR2=document.getElementById('table2');
    conexion.query($query, function(err, rows, fields){
        if(err){
            console.log("Error en el query");
            console.log(err);
            return;
        }else{
            console.log("toodo bien", rows, fields)
         
            if (rows.length == 0) {
                alert("Dato no encontrado")
            }
            else {
                //var cadena = "";
                const long = rows.length;
                for (let i = 0; i < long; i++) {
                   // if (rows[i].nombre == brr) {
                        const element = rows[i];
                    //cadena += element.id_Usuario + " " + element.Nombre + " " + "\n";

                        var newRow = TableR2.insertRow(-1);

                        var celdaId = newRow.insertCell(0);
                        var celdaUsuario = newRow.insertCell(1);
                        var celdaApellido = newRow.insertCell(2);

                        var textoId = document.createTextNode(element.id_alumnos);
                        var textoUsuario = document.createTextNode(element.nombre);
                        var textoApellido = document.createTextNode(element.apellido);

                        celdaId.appendChild(textoId);
                        celdaUsuario.appendChild(textoUsuario);
                        celdaApellido.appendChild(textoApellido);
                   // }else{
                      //  alert("no existe dato");
                   // }
                    
                }
                //console.log(cadena);

            }

        }
        
        //var cadena;
        /*if(long == 0){
            alert("Usuario no encontrado");
        }else{
            for(i=0;i<long;i++){
                //cadena += '\n'+ rows[i].id_alumnos + ' ' + rows[i].nombre + ' ' + rows[i].apellido + '\n';
                if(rows[i].nombre == brr){
                    var alumnsss = rows[i];
                    var newRow = TableR2.insertRow(-1);

                    var celdaId = newRow.insertCell(0);
                    var celdaUsuario = newRow.insertCell(1);
                    var celdaApellido = newRow.insertCell(2);

                    var textoId = document.createTextNode(alumnsss.id_alumnos);
                    var textoUsuario = document.createTextNode(alumnsss.nombre);
                    var textoApellido = document.createTextNode(alumnsss.apellido);

                    celdaId.appendChild(textoId);
                    celdaUsuario.appendChild(textoUsuario);
                    celdaApellido.appendChild(textoApellido);
                }
            }
            
        }*/
        
        //alert(cadena);
    });
}

function Borrar() {
    var elmtTable = document.getElementById("table2");
    var tableRows = elmtTable.getElementsByTagName("tr");
    var rowCount = tableRows.length;

    for (var x = rowCount - 1; x >= 0; x--) {
        elmtTable.removeChild(tableRows[x]);
    }
}

