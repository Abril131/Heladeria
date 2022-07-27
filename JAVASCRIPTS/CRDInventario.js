const conexion = require('../conectar');

$query = `SELECT * FROM inventario;`;
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


        for (i = 0; i < tam; i++) {

            var newRow = tablaR.insertRow(-1);

            var celdaID_Producto = newRow.insertCell(0);
            var celdaID_SubProducto = newRow.insertCell(1);
            var celdaTipoProducto = newRow.insertCell(2);
            var celdaTipoSubProducto = newRow.insertCell(3);
            var celdaCantidad = newRow.insertCell(4);
            var celdaTipoCantidad = newRow.insertCell(5);

            var textoID_Producto = document.createTextNode(rows[i].id_producto);
            var textoID_SubProducto = document.createTextNode(rows[i].id_subproducto);
            var textoTipoProducto = document.createTextNode(rows[i].tipo_producto);
            var textoTipoSubproducto = document.createTextNode(rows[i].subtipo_producto);
            var textoCantidad = document.createTextNode(rows[i].cantidad_producto);
            var textoTipoCantidad = document.createTextNode(rows[i].tipo_cantidad);

            celdaID_Producto.appendChild(textoID_Producto);
            celdaID_SubProducto.appendChild(textoID_SubProducto);
            celdaTipoProducto.appendChild(textoTipoProducto);
            celdaTipoSubProducto.appendChild(textoTipoSubproducto);
            celdaCantidad.appendChild(textoCantidad)
            celdaTipoCantidad.appendChild(textoTipoCantidad);
        }
    }
});

function inordeninv() {
    const Swal = require('sweetalert2');
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(data) {
            var newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

        inorder(node) {
            if (node !== null) {
                this.inorder(node.left);
                var num = parseInt(node.data);
                $query = `SELECT * FROM inventario where id_producto='${num}';`;
                conexion.query($query, function (err, rows, fields) {
                    if (err) {
                        console.log("Error en el query");
                        console.log(err);
                        return;
                    } else if (rows.length == 0) {
                        const $elemento = document.querySelector("#Table");
                        $elemento.innerHTML = "";

                        const tx = document.getElementById("Table");
                        tx.innerHTML = '<table id="Table" class="tabla2"><tr><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>Tipo de producto</b></th><th><b>Subtipo de producto</b></th><th><b>Cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';

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

                        for (let i = 0; i < tam; i++) {

                            var newRow = tablaR.insertRow(-1);

                            var celdaID_Producto = newRow.insertCell(0);
                            var celdaID_SubProducto = newRow.insertCell(1);
                            var celdaTipoProducto = newRow.insertCell(2);
                            var celdaTipoSubProducto = newRow.insertCell(3);
                            var celdaCantidad = newRow.insertCell(4);
                            var celdaTipoCantidad = newRow.insertCell(5);

                            var textoID_Producto = document.createTextNode(rows[i].id_producto);
                            var textoID_SubProducto = document.createTextNode(rows[i].id_subproducto);
                            var textoTipoProducto = document.createTextNode(rows[i].tipo_producto);
                            var textoTipoSubproducto = document.createTextNode(rows[i].subtipo_producto);
                            var textoCantidad = document.createTextNode(rows[i].cantidad_producto);
                            var textoTipoCantidad = document.createTextNode(rows[i].tipo_cantidad);

                            celdaID_Producto.appendChild(textoID_Producto);
                            celdaID_SubProducto.appendChild(textoID_SubProducto);
                            celdaTipoProducto.appendChild(textoTipoProducto);
                            celdaTipoSubProducto.appendChild(textoTipoSubproducto);
                            celdaCantidad.appendChild(textoCantidad)
                            celdaTipoCantidad.appendChild(textoTipoCantidad);
                        }
                    }
                });
                this.inorder(node.right);
            }
        }

        getRootNode() {
            return this.root;
        }
    }

    var BST = new BinarySearchTree();

    BST.insert(3);
    BST.insert(1);
    BST.insert(2);

    var root = BST.getRootNode();
    console.log("inorder traversal");
    const $elemento = document.querySelector("#Table");
    $elemento.innerHTML = "";

    const tx = document.getElementById("Table");
    tx.innerHTML = '<table id="Table" class="tabla2"><tr><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>Tipo de producto</b></th><th><b>Subtipo de producto</b></th><th><b>Cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';

    BST.inorder(root);

}

function postordeninv() {
    const Swal = require('sweetalert2');    //Node class
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(data) {
            var newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

        postorden(node) {
            if (node !== null) {
                this.postorden(node.left);
                this.postorden(node.right);
                var num1 = parseInt(node.data);
                console.log(node.data);
                $query = `SELECT * FROM inventario where id_producto='${num1}';`;
                conexion.query($query, function (err, rows, fields) {
                    if (err) {
                        console.log("Error en el query");
                        console.log(err);
                        return;
                    } else if (rows.length == 0) {
                        const $elemento = document.querySelector("#Table");
                        $elemento.innerHTML = "";

                        const tx = document.getElementById("Table");
                        tx.innerHTML = '<table id="Table" class="tabla2"><tr><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>Tipo de producto</b></th><th><b>Subtipo de producto</b></th><th><b>Cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';

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

                        for (let i = 0; i < tam; i++) {

                            var newRow = tablaR.insertRow(-1);

                            var celdaID_Producto = newRow.insertCell(0);
                            var celdaID_SubProducto = newRow.insertCell(1);
                            var celdaTipoProducto = newRow.insertCell(2);
                            var celdaTipoSubProducto = newRow.insertCell(3);
                            var celdaCantidad = newRow.insertCell(4);
                            var celdaTipoCantidad = newRow.insertCell(5);

                            var textoID_Producto = document.createTextNode(rows[i].id_producto);
                            var textoID_SubProducto = document.createTextNode(rows[i].id_subproducto);
                            var textoTipoProducto = document.createTextNode(rows[i].tipo_producto);
                            var textoTipoSubproducto = document.createTextNode(rows[i].subtipo_producto);
                            var textoCantidad = document.createTextNode(rows[i].cantidad_producto);
                            var textoTipoCantidad = document.createTextNode(rows[i].tipo_cantidad);

                            celdaID_Producto.appendChild(textoID_Producto);
                            celdaID_SubProducto.appendChild(textoID_SubProducto);
                            celdaTipoProducto.appendChild(textoTipoProducto);
                            celdaTipoSubProducto.appendChild(textoTipoSubproducto);
                            celdaCantidad.appendChild(textoCantidad)
                            celdaTipoCantidad.appendChild(textoTipoCantidad);
                        }
                    }
                });
            }
        }

        getRootNode() {
            return this.root;
        }
    }

    var BST = new BinarySearchTree();

    BST.insert(3);
    BST.insert(1);
    BST.insert(2);

    var root = BST.getRootNode();
    console.log("postorder traversal");
    const $elemento = document.querySelector("#Table");
    $elemento.innerHTML = "";

    const tx = document.getElementById("Table");
    tx.innerHTML = '<table id="Table" class="tabla2"><tr><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>Tipo de producto</b></th><th><b>Subtipo de producto</b></th><th><b>Cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';

    BST.postorden(root);
}

function preordeninv() {
    const Swal = require('sweetalert2');    //Node class
    class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }

    class BinarySearchTree {
        constructor() {
            this.root = null;
        }

        insert(data) {
            var newNode = new Node(data);
            if (this.root === null) {
                this.root = newNode;
            } else {
                this.insertNode(this.root, newNode);
            }
        }

        insertNode(node, newNode) {
            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    this.insertNode(node.left, newNode);
                }
            }
            else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    this.insertNode(node.right, newNode);
                }
            }
        }

        preorder(node) {
            if (node !== null) {
                var num = parseInt(node.data);
                console.log(num);
                $query = `SELECT * FROM inventario where id_producto='${num}';`;
                conexion.query($query, function (err, rows, fields) {
                    if (err) {
                        console.log("Error en el query");
                        console.log(err);
                        return;
                    } else if (rows.length == 0) {
                        const $elemento = document.querySelector("#Table");
                        $elemento.innerHTML = "";

                        const tx = document.getElementById("Table");
                        tx.innerHTML = '<table id="Table" class="tabla2"><tr><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>Tipo de producto</b></th><th><b>Subtipo de producto</b></th><th><b>Cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';
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

                        for (let i = 0; i < tam; i++) {

                            var newRow = tablaR.insertRow(-1);

                            var celdaID_Producto = newRow.insertCell(0);
                            var celdaID_SubProducto = newRow.insertCell(1);
                            var celdaTipoProducto = newRow.insertCell(2);
                            var celdaTipoSubProducto = newRow.insertCell(3);
                            var celdaCantidad = newRow.insertCell(4);
                            var celdaTipoCantidad = newRow.insertCell(5);

                            var textoID_Producto = document.createTextNode(rows[i].id_producto);
                            var textoID_SubProducto = document.createTextNode(rows[i].id_subproducto);
                            var textoTipoProducto = document.createTextNode(rows[i].tipo_producto);
                            var textoTipoSubproducto = document.createTextNode(rows[i].subtipo_producto);
                            var textoCantidad = document.createTextNode(rows[i].cantidad_producto);
                            var textoTipoCantidad = document.createTextNode(rows[i].tipo_cantidad);

                            celdaID_Producto.appendChild(textoID_Producto);
                            celdaID_SubProducto.appendChild(textoID_SubProducto);
                            celdaTipoProducto.appendChild(textoTipoProducto);
                            celdaTipoSubProducto.appendChild(textoTipoSubproducto);
                            celdaCantidad.appendChild(textoCantidad)
                            celdaTipoCantidad.appendChild(textoTipoCantidad);
                        }
                    }
                });
                this.preorder(node.left);
                this.preorder(node.right);
            }
        }
        getRootNode() {
            return this.root;
        }
    }

    var BST = new BinarySearchTree();

    BST.insert(3);
    BST.insert(1);
    BST.insert(2);

    var root = BST.getRootNode();
    console.log("preorder traversal");
    const $elemento = document.querySelector("#Table");
    $elemento.innerHTML = "";

    const tx = document.getElementById("Table");
    tx.innerHTML = '<table id="Table" class="tabla2"><tr><th><b>id_producto</b></th><th><b>id_subproducto</b></th><th><b>Tipo de producto</b></th><th><b>Subtipo de producto</b></th><th><b>Cantidad</b></th><th><b>Tipo de cantidad</b></th></tr></table>';

    BST.preorder(root);
}

function agregarProductoInventarioEnLaDB() {
    const Swal = require('sweetalert2');
    const conexion = require('../conectar');

    var producto = document.getElementById('id_tipoProducto').value;
    var subproducto = parseInt(document.getElementById('id_subproducto').value);
    var nombre_producto = document.getElementById('id_productoNombre').value;
    var cantidad = parseInt(document.getElementById('id_cantidad').value);

    $query = `SELECT id_subproducto, tipo_producto, subtipo_producto FROM inventario;`;
    conexion.query($query, function (err, rows) {
        if (err) {
            console.log("Error en el query");
            console.log(err);
            return;
        } else {

            if (rows.length == 0) {
                Swal.fire({
                    title: 'No hay datos',
                    text: 'Inserte valores validos',
                    background: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                })
            } else {
                var producto2 = "";
                var comparacion = false;
                var comparacion2 = false;

                if (producto == "1") { producto2 = "Helado"; }
                if (producto == "2") { producto2 = "Cono"; }
                if (producto == "3") { producto2 = "Vaso"; }
                if (producto == "4") { producto2 = "Galleta"; }
                if (producto == "5") { producto2 = "Chocolate"; }
                if (producto == "6") { producto2 = "Chispas"; }
                if (producto == "0") { producto2 = "0"; }

                for (let i = 0; i < rows.length; i++) {
                    var subtp = rows[i].subtipo_producto;
                    var tipro = rows[i].tipo_producto;
                    if (nombre_producto == subtp && producto2 == tipro) {
                        comparacion = true;
                        break;
                    } else {
                        comparacion = false;
                    }

                    let com = parseInt(rows[i].id_subproducto);
                    if (subproducto == com) {
                        comparacion2 = true;
                        break;
                    } else {
                        comparacion2 = false;
                    }
                }

                if (comparacion == true || producto2 == "0" || isNaN(subproducto) || subproducto < 1 || comparacion2 == true || nombre_producto == "" || isNaN(cantidad) || cantidad < 1) {
                    console.log(producto2);
                    console.log(comparacion);
                    console.log(comparacion2);
                    Swal.fire({
                        title: 'Acción denegada',
                        text: 'Inserte valores validos',
                        background: 'rgba(0, 0, 0, 0.9)',
                        color: 'white',
                    })
                } else {
                    switch (producto) {
                        case "1":
                            var tipo_producto = "Helado";
                            var tipo_cantidad = "Litros";
                            $query = `INSERT INTO inventario VALUES ('${producto}', '${subproducto}', '${tipo_producto}', '${nombre_producto}', '${cantidad}', '${tipo_cantidad}');`;
                            conexion.query($query, function (err, rows) {
                                if (err) {
                                    console.log("Error en el query");
                                    console.log(err);
                                    return;
                                } else {
                                    Swal.fire({
                                        title: 'Agregado Correctamente',
                                        text: 'Presione Ok para refrescar la página',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            location.reload();
                                        }
                                    });
                                }
                            });
                            break;
                        case "2":
                            var tipo_producto = "Cono";
                            var tipo_cantidad = "Unidades";
                            $query = `INSERT INTO inventario VALUES ('${producto}', '${subproducto}', '${tipo_producto}', '${nombre_producto}', '${cantidad}', '${tipo_cantidad}');`;
                            conexion.query($query, function (err, rows) {
                                if (err) {
                                    console.log("Error en el query");
                                    console.log(err);
                                    return;
                                } else {
                                    Swal.fire({
                                        title: 'Agregado Correctamente',
                                        text: 'Presione Ok para refrescar la página',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            location.reload();
                                        }
                                    });
                                }
                            });
                            break;
                        case "3":
                            var tipo_producto = "Vaso";
                            var tipo_cantidad = "Unidades";
                            console.log(comparacion);
                            console.log(subproducto);
                            console.log(comparacion2);
                            $query = `INSERT INTO inventario VALUES ('${producto}', '${subproducto}', '${tipo_producto}', '${nombre_producto}', '${cantidad}', '${tipo_cantidad}');`;
                            conexion.query($query, function (err, rows) {
                                if (err) {
                                    console.log("Error en el query");
                                    console.log(err);
                                    return;
                                } else {
                                    Swal.fire({
                                        title: 'Agregado Correctamente',
                                        text: 'Presione Ok para refrescar la página',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            location.reload();
                                        }
                                    });
                                }
                            });
                            break;
                        case "4":
                            var tipo_producto = "Chispas";
                            var tipo_cantidad = "Kilos";
                            $query = `INSERT INTO inventario VALUES ('${producto}', '${subproducto}', '${tipo_producto}', '${nombre_producto}', '${cantidad}', '${tipo_cantidad}');`;
                            conexion.query($query, function (err, rows) {
                                if (err) {
                                    console.log("Error en el query");
                                    console.log(err);
                                    return;
                                } else {
                                    Swal.fire({
                                        title: 'Agregado Correctamente',
                                        text: 'Presione Ok para refrescar la página',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            location.reload();
                                        }
                                    });
                                }
                            });
                            break;
                        case "5":
                            var tipo_producto = "Galleta";
                            var tipo_cantidad = "Unidades";
                            $query = `INSERT INTO inventario VALUES ('${producto}', '${subproducto}', '${tipo_producto}', '${nombre_producto}', '${cantidad}', '${tipo_cantidad}');`;
                            conexion.query($query, function (err, rows) {
                                if (err) {
                                    console.log("Error en el query");
                                    console.log(err);
                                    return;
                                } else {
                                    Swal.fire({
                                        title: 'Agregado Correctamente',
                                        text: 'Presione Ok para refrescar la página',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            location.reload();
                                        }
                                    });
                                }
                            });
                            break;
                        case "6":
                            var tipo_producto = "Chocolate";
                            var tipo_cantidad = "Litros";
                            $query = `INSERT INTO inventario VALUES ('${producto}', '${subproducto}', '${tipo_producto}', '${nombre_producto}', '${cantidad}', '${tipo_cantidad}');`;
                            conexion.query($query, function (err, rows) {
                                if (err) {
                                    console.log("Error en el query");
                                    console.log(err);
                                    return;
                                } else {
                                    Swal.fire({
                                        title: 'Agregado Correctamente',
                                        text: 'Presione Ok para refrescar la página',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        color: 'white'
                                    }).then((result) => {
                                        if (result.isConfirmed) {
                                            location.reload();
                                        }
                                    });
                                }
                            });
                            break;
                    }
                }
            }
        }
    })
}

function eliminarProductoInventarioDeLaDB() {
    const Swal = require('sweetalert2');
    var datoeliminado = document.getElementById('inputID1').value;
    console.log(datoeliminado);
    if (datoeliminado >= 1 && datoeliminado != "") {
        $elimDato = 'SELECT id_subproducto from inventario;';
        conexion.query($elimDato, function (err, rows) {
            if (err) {
                console.log("Error en el query");
                console.log(err);
                return;
            } else {
                class Node {
                    constructor(data) {
                        this.data = data;
                        this.left = null;
                        this.right = null;
                    }
                }

                class BinarySearchTree {
                    constructor() {
                        this.root = null;
                    }
                    insert(data) {
                        var newNode = new Node(data);
                        if (this.root === null) {
                            this.root = newNode;
                        } else {
                            this.insertNode(this.root, newNode);
                        }
                    }

                    insertNode(node, newNode) {
                        if (newNode.data < node.data) {
                            if (node.left === null) {
                                node.left = newNode;
                            } else {
                                this.insertNode(node.left, newNode);
                            }
                        }
                        else {
                            if (node.right === null) {
                                node.right = newNode;
                            } else {
                                this.insertNode(node.right, newNode);
                            }
                        }
                    }

                    remove(data) {
                        this.root = this.removeNode(this.root, data);
                        // Codigo sql
                    }

                    removeNode(node, key) {
                        if (node === null)
                            return null;
                        else
                            if (key < node.data) {
                                node.left = this.removeNode(node.left, key);
                                return node;
                            }
                            else {
                                if (node.left === null && node.right === null) {
                                    node = null;
                                    return node;
                                }
                                if (node.left === null) {
                                    node = node.right;
                                    return node;
                                }
                                else if (node.right === null) {
                                    node = node.left;
                                    return node;
                                }
                                var aux = this.findMinNode(node.right);
                                node.data = aux.data;
                                node.right = this.removeNode(node.right, aux.data);
                                return node;
                            }
                    }

                    inorder(node) {
                        if (node !== null) {
                            this.inorder(node.left);
                            //console.log(node.left);
                            console.log(node.data);
                            //console.log(node.right);
                            this.inorder(node.right);
                        }
                    }

                    findMinNode(node) {
                        if (node.left === null) {
                            return node;
                        } else {
                            return this.findMinNode(node.left);
                        }
                    }

                    getRootNode() {
                        return this.root;
                    }

                    search(node, data) {
                        if (node === null) {
                            return "nada";
                        } else {
                            if (data < node.data) {
                                return this.search(node.left, data);
                            } else {
                                if (data > node.data) {
                                    return this.search(node.right, data);
                                } else {
                                    return node;
                                }
                            }
                        }
                    }

                }
                var BST = new BinarySearchTree();
                console.log(rows.length);
                // Ingreso de valores al arbol
                for (var i = 0; i < rows.length; i++) {
                    BST.insert(rows[i].id_subproducto);
                };

                if (BST.search(BST.getRootNode(), datoeliminado).data == "nada") {
                    Swal.fire({
                        title: 'Dato no encontrado',
                        text: 'No se encunetra en la base de datos',
                        background: 'rgba(0, 0, 0, 0.9)',
                        color: 'white',
                    }).then((result) => {
                        if (result.isConfirmed) {
                            location.reload();
                        }
                    });
                } else {
                    BST.remove(datoeliminado);
                    $elimDato2 = `SELECT * FROM inventario WHERE id_subproducto = '${datoeliminado}';`;
                    conexion.query($elimDato2, function (err, rows) {
                        if (err) {
                            console.log("Error en el query");
                            console.log(err);
                            return;
                        } else {
                            if (rows.length == 0) {
                                Swal.fire({
                                    title: 'Dato no encontrado',
                                    text: 'No se encunetra en la base de datos',
                                    background: 'rgba(0, 0, 0, 0.9)',
                                    color: 'white',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        location.reload();
                                    }
                                });
                            } else {
                                $elimDato = `DELETE FROM inventario WHERE id_subproducto = '${datoeliminado}';`;
                                conexion.query($elimDato, function (err, rows) {
                                    if (err) {
                                        console.log("Error en el query");
                                        console.log(err);
                                        return;
                                    } else {
                                        Swal.fire({
                                            title: 'Dato eliminado',
                                            text: 'Se eliminó el dato de la base de datos',
                                            background: 'rgba(0, 0, 0, 0.9)',
                                            color: 'white',
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                location.reload();
                                            }
                                        });
                                    }
                                })

                            }
                        }
                    })

                }
            }
        })
    } else {
        Swal.fire({
            title: 'Ingreso invalido',
            text: 'Por favor ingrese una ID valida',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
        });
    }
}

function BuscarProductoInventarioDeLaDB() {
    const Swal = require('sweetalert2');
    var datobuscado = document.getElementById('inputID1').value;
    console.log(datobuscado);
    if (datobuscado >= 1 && datobuscado != "") {
        $elimDato = 'SELECT id_subproducto from inventario;';
        conexion.query($elimDato, function (err, rows) {
            if (err) {
                console.log("Error en el query");
                console.log(err);
                return;
            } else {
                //Node class
                class Node {
                    constructor(data) {
                        this.data = data;
                        this.left = null;
                        this.right = null;
                    }
                }

                class BinarySearchTree {
                    constructor() {
                        this.root = null;
                    }
                    insert(data) {
                        var newNode = new Node(data);
                        if (this.root === null) {
                            this.root = newNode;
                        } else {
                            this.insertNode(this.root, newNode);
                        }
                    }

                    insertNode(node, newNode) {
                        if (newNode.data < node.data) {
                            if (node.left === null) {
                                node.left = newNode;
                            } else {
                                this.insertNode(node.left, newNode);
                            }
                        }
                        else {
                            if (node.right === null) {
                                node.right = newNode;
                            } else {
                                this.insertNode(node.right, newNode);
                            }
                        }
                    }

                    remove(data) {
                        this.root = this.removeNode(this.root, data);
                    }

                    removeNode(node, key) {
                        if (node === null)
                            return null;
                        else
                            if (key < node.data) {
                                node.left = this.removeNode(node.left, key);
                                return node;
                            }
                            else {
                                if (node.left === null && node.right === null) {
                                    node = null;
                                    return node;
                                }
                                if (node.left === null) {
                                    node = node.right;
                                    return node;
                                }
                                else if (node.right === null) {
                                    node = node.left;
                                    return node;
                                }
                                var aux = this.findMinNode(node.right);
                                node.data = aux.data;
                                node.right = this.removeNode(node.right, aux.data);
                                return node;
                            }
                    }

                    inorder(node) {
                        if (node !== null) {
                            this.inorder(node.left);
                            //console.log(node.left);
                            console.log(node.data);
                            //console.log(node.right);
                            this.inorder(node.right);
                        }
                    }

                    findMinNode(node) {
                        if (node.left === null) {
                            return node;
                        } else {
                            return this.findMinNode(node.left);
                        }
                    }

                    getRootNode() {
                        return this.root;
                    }

                    search(node, data) {
                        if (node === null) {
                            return "nada";
                        } else {
                            if (data < node.data) {
                                return this.search(node.left, data);
                            } else {
                                if (data > node.data) {
                                    return this.search(node.right, data);
                                } else {
                                    return node;
                                }
                            }
                        }
                    }

                }
                var BST = new BinarySearchTree();
                for (var i = 0; i < rows.length; i++) {
                    BST.insert(rows[i].id_subproducto);
                };
                if (BST.search(BST.getRootNode(), datobuscado).data == "nada") {
                    Swal.fire({
                        title: 'Dato no encontrado',
                        background: 'rgba(0, 0, 0, 0.9)',
                        color: 'white',
                    })
                } else {
                    $elimDato = `SELECT * FROM inventario WHERE id_subproducto = '${datobuscado}';`;
                    conexion.query($elimDato, function (err, rows) {
                        if (err) {
                            console.log("Error en el query");
                            console.log(err);
                            return;
                        } else {
                            if (rows.length == 0) {
                                Swal.fire({
                                    title: 'Dato no encontrado',
                                    background: 'rgba(0, 0, 0, 0.9)',
                                    color: 'white',
                                })
                            } else {
                                var datos7 = " ID_producto: " + rows[0].id_producto + ", Tipo de producto: " + rows[0].tipo_producto + ", Nombre: " + rows[0].subtipo_producto + ", Cantidad: " + rows[0].cantidad_producto + " y Medida en: " + rows[0].tipo_cantidad;
                                Swal.fire({
                                    title: 'Dato encontrado',
                                    text: 'Se encontraron datos con el ID_subproducto: ' + BST.search(BST.getRootNode(), datobuscado).data + "," + datos7,
                                    background: 'rgba(0, 0, 0, 0.9)',
                                    color: 'white',
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        location.reload();
                                    }
                                });
                            }
                        }
                    })

                }
            }
        })
    } else {
        Swal.fire({
            title: 'Ingreso invalido',
            text: 'Por favor ingrese una ID valida',
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
        });
    }
}