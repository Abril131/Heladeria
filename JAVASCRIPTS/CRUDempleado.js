//const conexion = require('../conectar');

function actualizar() {
	location.reload();
}

// Aplicar CRUD

// Caso R del Crud (Read)
// Metodo para mostrar el registro

const conexion = require('../conectar');

$query = `select id_empleado, nombre, apellido_P, apellido_M, usuario, contrasena, edad, puesto, sueldo, horario_E, horario_S from empleado;`;
conexion.query($query, function (err, rows, fields) {
	if (err) {
		console.log("Error en el query");
		console.log(err);
		return;
	} else if (rows.length == 0) {
		alert("No hay datos en la tabla");
	} else {
		console.log("Ejecutado correctamente\n", rows);

		const tam = rows.length;
		var tablaR = document.getElementById("Table");


		for (i = 0; i < tam; i++) {
			var cadena = rows[i].id_user + " " + rows[i].nombre + " " + rows[i].contrasena + "\n";
			console.log(cadena);

			var newRow = tablaR.insertRow(-1);
			var celdaID = newRow.insertCell(0);
			var celdaUsuario = newRow.insertCell(1);
			var celdaNombre = newRow.insertCell(2);
			var celdaApellidoP = newRow.insertCell(3);
			var celdaApellidoM = newRow.insertCell(4);
			var celdaContrasena = newRow.insertCell(5);
			var celdaEdad = newRow.insertCell(6);
			var celdaPuesto = newRow.insertCell(7);
			var celdaSueldo = newRow.insertCell(8);
			var celdaHorario_E = newRow.insertCell(9);
			var celdaHorario_S = newRow.insertCell(10);

			var textoID = document.createTextNode(rows[i].id_empleado);
			var textUsuario = document.createTextNode(rows[i].usuario);
			var textNombre = document.createTextNode(rows[i].nombre);
			var textApellidoP = document.createTextNode(rows[i].apellido_P);
			var textApellidoM = document.createTextNode(rows[i].apellido_M);
			var textContrasena = document.createTextNode(rows[i].contrasena);
			var textEdad = document.createTextNode(rows[i].edad);
			var textPuesto = document.createTextNode(rows[i].puesto);
			var textSueldo = document.createTextNode(rows[i].sueldo);
			var textHorarioE = document.createTextNode(rows[i].horario_E);
			var textHorarioS = document.createTextNode(rows[i].horario_S);

			celdaID.appendChild(textoID);
			celdaUsuario.appendChild(textUsuario);
			celdaNombre.appendChild(textNombre);
			celdaApellidoP.appendChild(textApellidoP);
			celdaApellidoM.appendChild(textApellidoM)
			celdaContrasena.appendChild(textContrasena);
			celdaEdad.appendChild(textEdad);
			celdaPuesto.appendChild(textPuesto);
			celdaSueldo.appendChild(textSueldo);
			celdaHorario_E.appendChild(textHorarioE);
			celdaHorario_S.appendChild(textHorarioS);
		}
	}
});


// Caso U del Crud (Update)
// Codigo de modificacion del empleado a la Base de datos
function modificarDatosADB() {
	const conexion = require('../conectar');
	const Swal = require('sweetalert2');

	const id_empleado1 = document.getElementById('inputID1').value;
	console.log(id_empleado1);

	if (id_empleado1 > 0) {
		$query = `SELECT id_empleado FROM empleado WHERE id_empleado = '${id_empleado1}'`;
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
							inputOptions: {
								1: 'Nombre',
								2: 'Apellido Paterno',
								3: 'Apellido Materno',
								4: 'Usuario',
								5: 'Contraseña',
								6: 'Edad',
								7: 'Puesto',
								8: 'Sueldo'
							},
							inputPlaceholder: 'Selecciona una opción',
							showCancelButton: true,
							inputValidator: (value) => {
								return new Promise((resolve) => {
									if (value == 0) {
										resolve('No ha elegido una opcion')
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
									text: "Ingresa el nuevo nombre",
									input: 'text',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoNombre = result.value;
											console.log("El nuevo nombre es: " + nuevoNombre);

											$query = `UPDATE empleado SET nombre='${nuevoNombre}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('se insertaron los datos correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
										} else {
											alert("Nombre invalido");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
							case '2': // Caso Apellido paterno
								Swal.fire({
									text: "Ingresa el nuevo Apellido Paterno",
									input: 'text',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoApellidoP = result.value;
											console.log("El nuevo apellidoP es: " + nuevoApellidoP);

											$query = `UPDATE empleado SET apellido_P='${nuevoApellidoP}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('se insertaron los datos correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
										} else {
											alert("Apellido invalido");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
							case '3': // Caso Apellido Materno
								Swal.fire({
									text: "Ingresa el nuevo Apellido Paterno",
									input: 'text',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoApellidoM = result.value;
											console.log("El nuevo apellidoM es: " + nuevoApellidoM);

											$query = `UPDATE empleado SET apellido_P='${nuevoApellidoM}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('se insertaron los datos correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
										} else {
											alert("Apellido invalido");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
							case '4': // Caso Usuario
								Swal.fire({
									text: "Ingresa el nuevo nombre de Usuario",
									input: 'text',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoUsuario = result.value;
											console.log("El nuevo nombre de Usuario es: " + nuevoUsuario);

											$query = `UPDATE empleado SET usuario='${nuevoUsuario}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('se insertaron los datos correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
										} else {
											alert("Usuario invalido");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
							case '5': // Caso contrasena
								Swal.fire({
									text: "Ingresa la nueva Contraseña del usuario",
									input: 'text',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevaContrasena = result.value;
											console.log("La nueva Contraseña es: " + nuevaContrasena);

											$query = `UPDATE empleado SET contrasena='${nuevaContrasena}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('se insertaron los datos correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
										} else {
											alert("Contraseña invalido");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
							case '6': // Caso Edad
								Swal.fire({
									text: "Ingresa la nueva Edad del usuario",
									input: 'number',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevaEdad = parseInt(result.value);
											console.log("La nueva Edad es: " + nuevaEdad);
											if (nuevaEdad >= 18) {
												$query = `UPDATE empleado SET edad='${nuevaEdad}' WHERE id_empleado = '${id_empleado1}'`;
												conexion.query($query, function (err, rows) {
													if (err) {
														console.log("no cala el query");
														console.log(err);
														return;
													}
													alert('se insertaron los datos correctamente')
													console.log("todo cala bien", rows);
													location.reload();
												});
											} else {
												alert("Edad Invalida");
											}

										} else {
											alert("Edad invalida");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
							case '7': // Caso Puesto

								(async () => {
									const { value: opcion2 } = await Swal.fire({
										title: 'Seleciona el puesto',
										input: 'select',
										inputOptions: {
											1: 'Supervisor',
											2: 'Empleado',
										},
										inputPlaceholder: 'Selecciona un puesto',
										showCancelButton: true,
										inputValidator: (value) => {
											return new Promise((resolve) => {
												if (value == 0) {
													resolve('No ha elegido una opcion')
												} else {
													resolve()
												}
											})
										}
									});

									switch (opcion2) {
										case '1':
											opcionEmpleado = "Supervisor";
											console.log(opcionEmpleado);
											$query = `UPDATE empleado SET puesto='${opcionEmpleado}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('Se actualizo el puesto correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
											break;
										case '2':
											opcionEmpleado = "Empleado";
											console.log(opcionEmpleado);
											$query = `UPDATE empleado SET puesto='${opcionEmpleado}' WHERE id_empleado = '${id_empleado1}'`;
											conexion.query($query, function (err, rows) {
												if (err) {
													console.log("no cala el query");
													console.log(err);
													return;
												}
												alert('Se actualizo el puesto correctamente')
												console.log("todo cala bien", rows);
												location.reload();
											});
											break;
									}
								})()
								break;
							case '8': // Caso Sueldo
								Swal.fire({
									text: "Ingresa el nuevo sueldo",
									input: 'text',
									confirmButtonText: 'Cambiar',
									showCancelButton: true,
									cancelButtonText: 'Cancelar',
								}).then((result) => {
									if (result.isConfirmed) {
										if (result.value != "") {
											let nuevoSueldo = parseFloat(result.value);
											if (nuevoSueldo > 0) {
												console.log(nuevoSueldo);

												$query = `UPDATE empleado SET sueldo='${nuevoSueldo}' WHERE id_empleado = '${id_empleado1}'`;
												conexion.query($query, function (err, rows) {
													if (err) {
														console.log("no cala el query");
														console.log(err);
														return;
													}
													alert('se insertaron los datos correctamente')
													console.log("todo cala bien", rows);
													location.reload();
												});
											} else {
												alert("Sueldo invalido");
											}
										} else {
											alert("Sueldo invalido");
										}
									} else if (result.dismiss == 'cancel') {
										alert("Se le dio cancelar");
									}
								});
								break;
						}
					})()
				} else {
					alert("No existe ese ID");
				}
			}
		});
	} else {
		alert("Ingrese una ID valida");
	}
}

// Caso C del Crud (Create)
// Subir datos a la Base de datos
function subirDatosEmpleadoDB() {
	// Nombre, ApellidoP, ApellidoM, usario, Edad, Sueldo, Puesto, HorarioEntrada, HorarioSalida.
	const conexion = require('../conectar');

	// Obtencion de datos del HTML
	var nombre = document.getElementById("nombre").value;
	var apellidoPaterno = document.getElementById("AP").value;
	var apellidoMaterno = document.getElementById("AM").value;
	var usuario = document.getElementById("usuario").value;
	var contrasena = document.getElementById("contra").value;
	var edad = parseInt(document.getElementById("edad").value);
	var puesto = document.getElementById("puesto").value;
	var sueldo = parseFloat(document.getElementById("sueldo").value);

	var HorarioEntrada = "6:00:00";
	var HorarioSalida = "14:00:00";

	if (nombre != "" || apellidoPaterno != "" || apellidoMaterno != "" || usuario != "" || contrasena != "" || edad >= 18 || puesto != "" || sueldo > 0) {
		$query = `INSERT INTO empleado VALUES (0,'${nombre}','${apellidoPaterno}','${apellidoMaterno}','${usuario}','${contrasena}','${edad}','${puesto}','${sueldo}','${HorarioEntrada}','${HorarioSalida}')`;
		conexion.query($query, function (err, rows) {
			if (err) {
				console.log("Error en el query");
				console.log(err);
				return;
			}
			alert("se insertaron los datos correctamente")
			location.reload();
		});

	} else {
		alert("por favor llene toda las casillas")
	}
	location.reload();
}

// Caso D del Crud (Delete)
// Eliminar empleado de la Base de datos
function eliminarEmpleadoDeLaDB() {
	const conexion = require('../conectar');

	const id_empleado2 = document.getElementById('inputID1').value;
	console.log(id_empleado2);
	if (id_empleado2 > 0) {

		// $query para eliminar al empleado según ID
		$query = `SELECT id_empleado FROM empleado WHERE id_empleado = '${id_empleado2}'`;
		conexion.query($query, function (err, rows) {
			if (err) {
				console.log("no cala el query");
				console.log(err);
				return;
			} else {
				if (rows.length != 0) {
					$query = `DELETE FROM empleado WHERE id_empleado = '${id_empleado2}'`;
					conexion.query($query, function (err, rows) {
						if (err) {
							console.log("no cala el query");
							console.log(err);
							return;
						} else {
							console.log("todo cala bien", rows);
							alert("Usuario con ID " + id_empleado2 + " eliminado");
							location.reload();
						}
					});
				} else {
					alert("No existe ese ID");
				}

			}
		});
	} else {
		alert("Ingrese una ID valida");
	}

}