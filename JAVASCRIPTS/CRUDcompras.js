// Aplicar CRUD

// Caso R del Crud (Read)
const conexion = require('../conectar');
const Swal = require('sweetalert2');

$query = `select * from compras_inventario;`;
conexion.query($query, function (err, rows, fields) {
	if (err) {
		console.log("Error en el query");
		console.log(err);
		return;
	} else if (rows.length == 0) {
		Swal.fire({
			title: 'Registros inexistentes',
			text: 'No hay registros en la tabla',
			background: 'rgba(0, 0, 0, 0.9)',
			color: 'white',
		});
	} else {
		console.log("Ejecutado correctamente\n", rows);

		const tam = rows.length;
		var tablaR = document.getElementById("Table");


		for (i = 0; i < tam; i++) {

			var newRow = tablaR.insertRow(-1);

			var celdaID = newRow.insertCell(0);
			var celdaNombre = newRow.insertCell(1);
			var celdaCantidad = newRow.insertCell(2);
			var celdaPrecio = newRow.insertCell(3);
			var celdaTotal = newRow.insertCell(4);
			var celdaFechaCompra = newRow.insertCell(5);

			var textoID = document.createTextNode(rows[i].id_compra);
			var textoNombre = document.createTextNode(rows[i].nombre);
			var textoCantidad = document.createTextNode(rows[i].cantidad);
			var textoPrecio = document.createTextNode(rows[i].precio);
			var textoTotal = document.createTextNode(rows[i].total);
			var textoFechaCompra = document.createTextNode(rows[i].fecha_compra);

			celdaID.appendChild(textoID);
			celdaNombre.appendChild(textoNombre);
			celdaCantidad.appendChild(textoCantidad);
			celdaPrecio.appendChild(textoPrecio);
			celdaTotal.appendChild(textoTotal)
			celdaFechaCompra.appendChild(textoFechaCompra);
		}
	}
});


// Caso U del Crud (Update)
// Codigo de modificacion del empleado a la Base de datos
function modificarDatosADB() {
	const conexion = require('../conectar');
	const Swal = require('sweetalert2');

	const id_compra1 = document.getElementById('inputID1').value;
	console.log(id_compra1);

	if (id_compra1 > 0) {
		$query = `SELECT id_compra FROM compras_inventario WHERE id_compra = '${id_compra1}'`;
		conexion.query($query, function (err, rows) {
			if (err) {
				console.log("no cala el query");
				console.log(err);
				return;
			} else {
				if (rows.length != 0) {
					(async () => {
						const { value: opcion } = await Swal.fire({
							title: 'Selecciona lo que se desea modificar',
							input: 'select',
							background: 'rgba(0, 0, 0, 0.9)',
							color: '#7b3fec',
							inputOptions: {
								1: 'Nombre',
								2: 'Cantidad',
								3: 'Precio',
								4: 'Fecha'
							},
							inputPlaceholder: 'Selecciona una opción',
							showCancelButton: true,
							inputValidator: (value) => {
								return new Promise((resolve) => {
									if (value == 0) {
										resolve('No ha elegido una opcion');
									} else {
										resolve()
									}
								})
							}
						});

						// Switch que valida la selección de las opciones
						switch (opcion) {
							case '1': // Caso NOMBRE
								Swal.fire({
									title: "Ingresa el nuevo nombre de la compra",
									input: 'text',
									background: 'rgba(0, 0, 0, 0.9)',
									color: 'white',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoNombre = result.value;
											console.log("El nuevo nombre es: " + nuevoNombre);

											$query = `UPDATE compras_inventario SET nombre='${nuevoNombre}' WHERE id_compra= '${id_compra1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												console.log("todo cala bien", rows);
												Swal.fire({
													title: 'Registro exitoso',
													text: 'se insertaron los datos correctamente',
													background: 'rgba(0, 0, 0, 0.9)',
													color: 'white',
												}).then((result) => {
													if (result.isConfirmed) {
														location.reload();
													}
												});
											});
										} else {
											Swal.fire({
												title: 'Dato invalido',
												text: 'Ingrese un nombre valido.',
												background: 'rgba(0, 0, 0, 0.9)',
												color: 'white',
											});
										}
									} else if (result.dismiss == 'cancel') {
										Swal.fire({
											title: 'Se canceló la acción',
											background: 'rgba(0, 0, 0, 0.9)',
											color: 'white',
										});
									}
								});
								break;
							case '2': // Caso cantidad
								Swal.fire({
									title: "Ingresa la nueva Cantidad",
									input: 'number',
									background: 'rgba(0, 0, 0, 0.9)',
									color: 'white',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value > 0) {
											let nuevaCantidad = parseFloat(result.value);
											console.log("La nueva Cantidad es: " + nuevaCantidad);

											if (nuevaCantidad > 0) {
												$query = `UPDATE compras_inventario SET cantidad='${nuevaCantidad}' WHERE id_compra= '${id_compra1}'`;
												conexion.query($query, function (err, rows) {
													if (err) {
														console.log("no cala el query");
														console.log(err);
														return;
													}
													$query = `UPDATE compras_inventario SET total = precio*cantidad WHERE id_compra = '${id_compra1}'`;
													conexion.query($query, function (err, rows) {
														if (err) {
															console.log("no cala el query");
															console.log(err);
															return;
														} else {
															Swal.fire({
																title: 'El nuevo total es' + nuevototal,
																background: 'rgba(0, 0, 0, 0.9)',
																color: 'white',
															});
														}
													});
													console.log("todo cala bien", rows);
													Swal.fire({
														title: 'Registro exitoso',
														text: 'se insertaron los datos correctamente',
														background: 'rgba(0, 0, 0, 0.9)',
														color: 'white',
													}).then((result) => {
														if (result.isConfirmed) {
															location.reload();
														}
													});
												});
											} else {
												Swal.fire({
													title: 'Cantidad invalida',
													background: 'rgba(0, 0, 0, 0.9)',
													color: 'white',
												});
											}

										} else {
											Swal.fire({
												title: 'Cantidad invalida',
												background: 'rgba(0, 0, 0, 0.9)',
												color: 'white',
											});
										}
									} else if (result.dismiss == 'cancel') {
										Swal.fire({
											title: 'Se canceló la acción',
											background: 'rgba(0, 0, 0, 0.9)',
											color: 'white',
										});
									}
								});
								break;
							case '3': // Caso precio
								Swal.fire({
									title: "Ingresa el nuevo precio",
									input: 'number',
									background: 'rgba(0, 0, 0, 0.9)',
									color: 'white',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoprecio = parseFloat(result.value);

											if (nuevoprecio > 0) {
												console.log(nuevoprecio);

												$query = `UPDATE compras_inventario SET precio='${nuevoprecio}' WHERE id_compra = '${id_compra1}'`;
												conexion.query($query, function (err, rows) {
													if (err) {
														console.log("no cala el query");
														console.log(err);
														return;
													} else {
														$query = `UPDATE compras_inventario SET total = precio*cantidad WHERE id_compra = '${id_compra1}'`;
														conexion.query($query, function (err, rows) {
															if (err) {
																console.log("no cala el query");
																console.log(err);
																return;
															} else {
																Swal.fire({
																	title: 'El nuevo total es' + nuevototal,
																	background: 'rgba(0, 0, 0, 0.9)',
																	color: 'white',
																});
															}
														});
													}
													console.log("todo cala bien", rows);
													Swal.fire({
														title: 'Registro exitoso',
														text: 'se insertaron los datos correctamente',
														background: 'rgba(0, 0, 0, 0.9)',
														color: 'white',
													}).then((result) => {
														if (result.isConfirmed) {
															location.reload();
														}
													});
												});
											} else {
												Swal.fire({
													title: 'Sueldo invalido',
													background: 'rgba(0, 0, 0, 0.9)',
													color: 'white',
												});
											}
										} else {
											Swal.fire({
												title: 'Sueldo invalido',
												background: 'rgba(0, 0, 0, 0.9)',
												color: 'white',
											});
										}
									} else if (result.dismiss == 'cancel') {
										Swal.fire({
											title: 'Se canceló la acción',
											background: 'rgba(0, 0, 0, 0.9)',
											color: 'white',
										});
									}
								});
								break;
							case '4':// Caso fecha
								Swal.fire({
									title: "Ingresa la nueva fecha de la compra",
									input: 'text',
									background: 'rgba(0, 0, 0, 0.9)',
									color: 'white',
									inputPlaceholder: 'MM/DD/YY',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevaFecha = result.value;
											console.log("La nueva fecha es: " + nuevaFecha);
											// Mes, día, año
											let isValidDate = Date.parse(nuevaFecha);
											console.log(isValidDate);

											// Método para validar que la nueva fecha si es una fecha valida
											if (isNaN(isValidDate)) {
												Swal.fire({
													title: 'No es un formato de fecha valido',
													background: 'rgba(0, 0, 0, 0.9)',
													color: 'white',
												});
											}
											else {
												// Actualización en la base de datos
												$query = `UPDATE compras_inventario SET fecha_compra='${nuevaFecha}' WHERE id_compra= '${id_compra1}'`;
												conexion.query($query, function (err, rows) {
													if (err) {
														console.log("no cala el query");
														console.log(err);
														return;
													}
													console.log("todo cala bien", rows);
													Swal.fire({
														title: 'Registro exitoso',
														text: 'se insertaron los datos correctamente',
														background: 'rgba(0, 0, 0, 0.9)',
														color: 'white',
													}).then((result) => {
														if (result.isConfirmed) {
															location.reload();
														}
													});
												});
											}
										} else {
											Swal.fire({
												title: 'Fecha invalida',
												background: 'rgba(0, 0, 0, 0.9)',
												color: 'white',
											});
										}
									} else if (result.dismiss == 'cancel') {
										Swal.fire({
											title: 'Se canceló la acción',
											background: 'rgba(0, 0, 0, 0.9)',
											color: 'white',
										});
									}
								});
								break;
						}
					})()
				} else {
					Swal.fire({
						title: 'No existe ese ID',
						background: 'rgba(0, 0, 0, 0.9)',
						color: 'white',
					});
				}
			}
		});
	} else {
		Swal.fire({
			title: 'Ingrese una ID valida',
			background: 'rgba(0, 0, 0, 0.9)',
			color: 'white',
		});
	}


}

// Caso C del Crud (Create)
// Subir datos a la Base de datos
function subirDatosCompraDB() {
	// Nombre, ApellidoP, ApellidoM, usario, Edad, Sueldo, Puesto, HorarioEntrada, HorarioSalida.
	const conexion = require('../conectar');

	// Obtencion de datos del HTML
	var nombre = document.getElementById("nombreID").value;
	var cantidad = parseFloat(document.getElementById("cantidadID").value);
	var precio = parseFloat(document.getElementById("precioID").value);
	var fecha = document.getElementById("fechaID").value;
	var totalCompra = parseFloat(cantidad * precio);
	console.log(fecha);
	let isValidDate = Date.parse(fecha);

	if (isNaN(isValidDate)) {
		Swal.fire({
			title: 'No es un formato de fecha valido',
			background: 'rgba(0, 0, 0, 0.9)',
			color: 'white',
		});
	} else {
		if (nombre != "" && cantidad >= 0 && precio >= 0 && fecha != "") {
			$query = `INSERT INTO compras_inventario VALUES (0,'${nombre}','${cantidad}','${precio}','${totalCompra}','${fecha}');`;
			conexion.query($query, function (err, rows) {
				if (err) {
					console.log("Error en el query");
					console.log(err);
					return;
				}
				Swal.fire({
					title: 'Registro exitoso',
					text: 'Se insertaron los datos correctamente',
					background: 'rgba(0, 0, 0, 0.9)',
					color: 'white',
				}).then((result) => {
					if (result.isConfirmed) {
						location.reload();
					}
				});
			});

		} else {
			Swal.fire({
				title: 'Ingreso invalido',
				text: 'Por favor llene toda las casillas',
				background: 'rgba(0, 0, 0, 0.9)',
				color: 'white',
			});
		}
	}

}

// Caso D del Crud (Delete)
// Eliminar empleado de la Base de datos
function eliminarCompraDeLaDB() {
	const conexion = require('../conectar');

	const id_compra2 = document.getElementById('inputID1').value;
	console.log(id_compra2);
	if (id_compra2 > 0) {

		// $query para eliminar la compra según ID
		$query = `SELECT id_compra FROM compras_inventario WHERE id_compra = '${id_compra2}';`;
		conexion.query($query, function (err, rows) {
			if (err) {
				console.log("no cala el query");
				console.log(err);
				return;
			} else {
				if (rows.length != 0) {
					$query = `DELETE FROM compras_inventario WHERE id_compra = '${id_compra2}';`;
					conexion.query($query, function (err, rows) {
						if (err) {
							console.log("no cala el query");
							console.log(err);
							return;
						} else {
							Swal.fire({
								title: 'Eliminación exitosa',
								text: 'Compra con ID ' + id_compra2 + ' eliminado.',
								background: 'rgba(0, 0, 0, 0.9)',
								color: 'white',
							}).then((result) => {
								if (result.isConfirmed) {
									location.reload();
								}
							});
						}
					});
				} else {
					Swal.fire({
						title: 'No existe esa ID',
						background: 'rgba(0, 0, 0, 0.9)',
						color: 'white',
					});
				}
			}
		});

	} else {
		Swal.fire({
			title: 'Ingrese una ID valida',
			background: 'rgba(0, 0, 0, 0.9)',
			color: 'white',
		});
	}

}