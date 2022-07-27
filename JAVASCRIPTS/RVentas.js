const conexion = require('../conectar');
const Swal = require('sweetalert2');

$query = `SELECT * FROM ventas_menu;`;
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

            var celdaID_venta = newRow.insertCell(0);
            var celdaCantidad_helado = newRow.insertCell(1);
            var celdaID_sabor = newRow.insertCell(2);
            var celdaSabor = newRow.insertCell(3);
            var celdaTSabor = newRow.insertCell(4);
            var celdaID_cono = newRow.insertCell(5);
            var celdaCono = newRow.insertCell(6);
            var celdaTCono = newRow.insertCell(7);
            var celdaID_decoracion = newRow.insertCell(8);
            var celdaDecoracion = newRow.insertCell(9);
            var celdaTDecoracion = newRow.insertCell(10);
            var celdaFecha = newRow.insertCell(11);
            var celdaCantidad = newRow.insertCell(12);

            var textoID_venta = document.createTextNode(rows[i].id_ventas);
            var textoCantidad_helado = document.createTextNode(rows[i].cantidad_helados);
            var textoID_sabor = document.createTextNode(rows[i].id_sabor);
            var textoSabor = document.createTextNode(rows[i].helado_sabor);
            var textoTSabor = document.createTextNode(rows[i].total_sabor);
            var textoID_cono = document.createTextNode(rows[i].id_cono);
            var textoCono = document.createTextNode(rows[i].cono_tipo);
            var textoTCono = document.createTextNode(rows[i].total_cono);
            var textoID_decoracion = document.createTextNode(rows[i].id_decoracion);
            var textoDecoracion = document.createTextNode(rows[i].decoración);
            var textoTDecoracion = document.createTextNode(rows[i].total_decoracion);
            var textoFecha = document.createTextNode(rows[i].fecha);
            var textoTotal = document.createTextNode(rows[i].total);

            celdaID_venta.appendChild(textoID_venta);
            celdaCantidad_helado.appendChild(textoCantidad_helado);
            celdaID_sabor.appendChild(textoID_sabor);
            celdaSabor.appendChild(textoSabor);
            celdaTSabor.appendChild(textoTSabor);
            celdaID_cono.appendChild(textoID_cono)
            celdaCono.appendChild(textoCono);
            celdaTCono.appendChild(textoTCono);
            celdaID_decoracion.appendChild(textoID_decoracion);
            celdaDecoracion.appendChild(textoDecoracion);
            celdaTDecoracion.appendChild(textoTDecoracion);
            celdaFecha.appendChild(textoFecha);
            celdaCantidad.appendChild(textoTotal);
        }
    }
});

function ordenarPorFecha() {

    div = document.getElementById('oculto');
    div.style.display = '';
    fecha = document.getElementById('ID_fecha').value;

    $query = `SELECT * FROM ventas_menu where fecha='${fecha}';`;
    conexion.query($query, function (err, rows, fields) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        } else if (rows.length == 0) {
            const $elemento = document.querySelector("#Table1");
            $elemento.innerHTML = "";

            const tx = document.getElementById("Table1");
            tx.innerHTML = '<table class="tabla2"><tr><th><b>ID_Venta</b></th><th><b>Cantidad</b></th><th><b>ID_Sabor</b></th><th><b>Sabor</b></th><th><b>Total Helado</b></th><th><b>ID_Cono</b></th><th><b>Cono</b></th><th><b>Total Cono</b></th><th><b>ID_Decoración</b></th><th><b>Decoración</b></th><th><b>Total Decoracion</b></th><th><b>Fecha</b></th><th><b>Total</b></th></tr></table>';
            Swal.fire({
                title: 'Registros inexistente',
                text: 'No hay registros en la tabla',
                background: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
            });
        } else {
            Swal.fire({
                title: 'Registro encontrado',
                background: 'rgba(0, 0, 0, 0.9)',
                color: 'white',
            });

            console.log("Ejecutado correctamente\n", rows);
            reemplazar = document.getElementById('replace');

            const tam = rows.length;
            var tablaR = document.getElementById("Table1");
            const $elemento = document.querySelector("#Table1");
            $elemento.innerHTML = "";

            const tx = document.getElementById("Table1");
            tx.innerHTML = '<table class="tabla2"><tr><th><b>ID_Venta</b></th><th><b>Cantidad</b></th><th><b>ID_Sabor</b></th><th><b>Sabor</b></th><th><b>Total Helado</b></th><th><b>ID_Cono</b></th><th><b>Cono</b></th><th><b>Total Cono</b></th><th><b>ID_Decoración</b></th><th><b>Decoración</b></th><th><b>Total Decoracion</b></th><th><b>Fecha</b></th><th><b>Total</b></th></tr></table>';

            for (i = 0; i < tam; i++) {

                var newRow = tablaR.insertRow(-1);

                var celdaID_venta = newRow.insertCell(0);
                var celdaCantidad_helado = newRow.insertCell(1);
                var celdaID_sabor = newRow.insertCell(2);
                var celdaSabor = newRow.insertCell(3);
                var celdaTSabor = newRow.insertCell(4);
                var celdaID_cono = newRow.insertCell(5);
                var celdaCono = newRow.insertCell(6);
                var celdaTCono = newRow.insertCell(7);
                var celdaID_decoracion = newRow.insertCell(8);
                var celdaDecoracion = newRow.insertCell(9);
                var celdaTDecoracion = newRow.insertCell(10);
                var celdaFecha = newRow.insertCell(11);
                var celdaCantidad = newRow.insertCell(12);

                var textoID_venta = document.createTextNode(rows[i].id_ventas);
                var textoCantidad_helado = document.createTextNode(rows[i].cantidad_helados);
                var textoID_sabor = document.createTextNode(rows[i].id_sabor);
                var textoSabor = document.createTextNode(rows[i].helado_sabor);
                var textoTSabor = document.createTextNode(rows[i].total_sabor);
                var textoID_cono = document.createTextNode(rows[i].id_cono);
                var textoCono = document.createTextNode(rows[i].cono_tipo);
                var textoTCono = document.createTextNode(rows[i].total_cono);
                var textoID_decoracion = document.createTextNode(rows[i].id_decoracion);
                var textoDecoracion = document.createTextNode(rows[i].decoración);
                var textoTDecoracion = document.createTextNode(rows[i].total_decoracion);
                var textoFecha = document.createTextNode(rows[i].fecha);
                var textoTotal = document.createTextNode(rows[i].total);

                celdaID_venta.appendChild(textoID_venta);
                celdaCantidad_helado.appendChild(textoCantidad_helado);
                celdaID_sabor.appendChild(textoID_sabor);
                celdaSabor.appendChild(textoSabor);
                celdaTSabor.appendChild(textoTSabor);
                celdaID_cono.appendChild(textoID_cono)
                celdaCono.appendChild(textoCono);
                celdaTCono.appendChild(textoTCono);
                celdaID_decoracion.appendChild(textoID_decoracion);
                celdaDecoracion.appendChild(textoDecoracion);
                celdaTDecoracion.appendChild(textoTDecoracion);
                celdaFecha.appendChild(textoFecha);
                celdaCantidad.appendChild(textoTotal);
            }

        }
    });
}
