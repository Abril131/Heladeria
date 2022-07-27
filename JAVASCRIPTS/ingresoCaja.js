const Swal = require('sweetalert2');

function mostrarDatos() {
    const conexion = require('../conectar');
    let JsonArchivo = require("../Index2.json");

    console.log(JsonArchivo.cantidad_caja);
    cantidadCaja = JsonArchivo.cantidad_caja;

    // Parte de la cantidad de la caja
    document.getElementById('capitalCaja').innerHTML = cantidadCaja;

    $query = `SELECT SUM(total) AS sumaTotal FROM comprasgastos;`;
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log("no cala el query");
            console.log(err);
            return;
        } else {
            // parte de la cantidad de total en compras
            comprasTotal = rows[0].sumaTotal;
            document.getElementById('compras').innerHTML = comprasTotal;

            $query = `SELECT SUM(total) AS sumaTotalVentas FROM ventas_menu;`;
            conexion.query($query, function (err, rows) {
                if (err) {
                    console.log("no cala el query");
                    console.log(err);
                    return;
                } else {
                    ventasTotal = rows[0].sumaTotalVentas;
                    document.getElementById('ventas').innerHTML = ventasTotal;

                    // Parte de ganancias
                    numeroVentasTotal = parseInt(ventasTotal);
                    numeroCantidadCaja = parseInt(cantidadCaja);
                    gananciasTotal = numeroVentasTotal + numeroCantidadCaja;
                    document.getElementById('gananciasT').innerHTML = gananciasTotal;
                }
            });
        }
    });
}

function ingresoAlJson() {
    const Json = require('../CrearJson2');
    valor = document.getElementById('cantidadCaja').value;

    if (valor >= 1000) {
        var dato = {
            cantidad_caja: valor
        };

        Json.GuardarJson(dato).then((err, res) => {
            console.log("La cantidad es: " + valor);

            try {
                Swal.fire({
                    background: 'rgba(0, 0, 0, 0.9)',
                    title: 'Puede continuar',
                    color: 'white',
                }).then((result) => {
                    if (result.isConfirmed) {
                        leer = require("../Index2.json")
                        location.href = "../HTMLS/empleadoSabor.html";
                    }
                });
            }
            catch {
                jonson.GuardarJson(dato);
            }

        });
    } else {
        Swal.fire({
            background: 'rgba(0, 0, 0, 0.9)',
            title: 'Ingrese un valor minimo aceptable',
            color: 'white',
        })
    }

}
