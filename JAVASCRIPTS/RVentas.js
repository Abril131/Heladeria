const conexion = require('../conectar');
const Swal = require('sweetalert2');

$query = `SELECT * FROM ventas_corte;`;
conexion.query($query, function (err, rows, fields) {
    if (err) {
        console.log("Error en el query");
        console.log(err);
        return;
    } else if (rows.length == 0) {
        Swal.fire({
            title: 'Registros invalidos',
            text: 'No hay registros en la tabla',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
        });
    } else {
        console.log("Ejecutado correctamente\n", rows);

        const tam = rows.length;
        var tablaR = document.getElementById("Table");

        // fecha_corte, id_producto, id_subproducto, nombre, cantidad, tipo_cantidad

        for (i = 0; i < tam; i++) {

            var newRow = tablaR.insertRow(-1);

            var celdaFecha_corte = newRow.insertCell(0);
            var celdaID_producto = newRow.insertCell(1);
            var celdaID_subproducto = newRow.insertCell(2);
            var celdaNombre = newRow.insertCell(3);
            var celdaCantidad = newRow.insertCell(4);
            var celdaTipoCantidad = newRow.insertCell(5);

            var textoFecha_corte = document.createTextNode(rows[i].fecha_corte);
            var textoID_producto = document.createTextNode(rows[i].id_producto);
            var textoID_subproducto = document.createTextNode(rows[i].id_subproducto);
            var textoNombre = document.createTextNode(rows[i].nombre);
            var textoCantidad = document.createTextNode(rows[i].cantidad);
            var textoTipoCantidad = document.createTextNode(rows[i].tipo_cantidad);

            celdaFecha_corte.appendChild(textoFecha_corte);
            celdaID_producto.appendChild(textoID_producto);
            celdaID_subproducto.appendChild(textoID_subproducto);
            celdaNombre.appendChild(textoNombre);
            celdaCantidad.appendChild(textoCantidad)
            celdaTipoCantidad.appendChild(textoTipoCantidad);
        }
    }
});

function ordenarPorFecha() {

    div = document.getElementById('oculto');
    div.style.display = '';
    fecha = document.getElementById('ID_fecha').value;

    $query = `SELECT * FROM ventas_corte where fecha_corte='${fecha}';`;
    conexion.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        } else if (rows.length == 0) {
            const $elemento = document.querySelector("#Table1");
            $elemento.innerHTML = "";

            const tx = document.getElementById("Table1");
            tx.innerHTML = '<table class="tabla2"><tr><th><b>Fecha de corte</b></th><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>nombre</b></th><th><b>cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';
            Swal.fire({
                title: 'Registros inexistente',
                text: 'No hay registros en la tabla',
                background: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
            });
        } else {
            console.log("Ejecutado correctamente\n", rows);
            reemplazar = document.getElementById('replace');

            const tam = rows.length;
            var tablaR = document.getElementById("Table1");
            const $elemento = document.querySelector("#Table1");
            $elemento.innerHTML = "";

            const tx = document.getElementById("Table1");
            tx.innerHTML = '<table class="tabla2"><tr><th><b>Fecha de corte</b></th><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>nombre</b></th><th><b>cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';

            for (i = 0; i < tam; i++) {

                var newRow = tablaR.insertRow(-1);
                /*console.log(newRow);*/
                var celdaFecha_corte = newRow.insertCell(0);
                var celdaID_producto = newRow.insertCell(1);
                var celdaID_subproducto = newRow.insertCell(2);
                var celdaNombre = newRow.insertCell(3);
                var celdaCantidad = newRow.insertCell(4);
                var celdaTipoCantidad = newRow.insertCell(5);

                var textoFecha_corte = document.createTextNode(rows[i].fecha_corte);
                var textoID_producto = document.createTextNode(rows[i].id_producto);
                var textoID_subproducto = document.createTextNode(rows[i].id_subproducto);
                var textoNombre = document.createTextNode(rows[i].nombre);
                var textoCantidad = document.createTextNode(rows[i].cantidad);
                var textoTipoCantidad = document.createTextNode(rows[i].tipo_cantidad);

                celdaFecha_corte.appendChild(textoFecha_corte);
                celdaID_producto.appendChild(textoID_producto);
                celdaID_subproducto.appendChild(textoID_subproducto);
                celdaNombre.appendChild(textoNombre);
                celdaCantidad.appendChild(textoCantidad)
                celdaTipoCantidad.appendChild(textoTipoCantidad);
            }

        }
    });
}
