function mostrarTablaReporte() {
    const conexion = require('../conectar');
    const Swal = require('sweetalert2');

    $query = `select * from ventas_menu;`;
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
            console.log("Ejecutado correctamente");

            $query = `SELECT SUM(cantidad_helados) AS cantidadH, helado_sabor, SUM(total_sabor) as totalH FROM ventas_menu GROUP BY helado_sabor;`;
            conexion.query($query, function (err, rows, fields) {
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
                        //insert(data)
                        //remove(data)

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

                        searchRight(node) {
                            while (true) {
                                var nodeBefor = node;
                                node = node.right;
                                if (node == null) {
                                    return nodeBefor.data;
                                }
                            }
                        }
                        searchLeft(node) {
                            while (true) {
                                var nodeBefor = node;
                                node = node.left;
                                if (node == null) {
                                    return nodeBefor.data;
                                }
                            }
                        }

                        search(node, data) {
                            if (node === null) {
                                return "";
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
                        BST.insert(parseInt(rows[i].totalH));
                    };

                    var root2 = BST.getRootNode();
                    console.log("Dato encontrado" + " " + BST.searchLeft(root2));
                    console.log("Dato encontrado" + " " + BST.searchRight(root2));

                    var primero = parseInt(BST.searchLeft(root2));
                    console.log(primero);
                    //var tam1 = rows.length - 1;
                    var ultimo = parseInt(BST.searchRight(root2));
                    console.log(ultimo);

                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].totalH == primero) {
                            console.log(primero);
                            var cantih = rows[i].cantidadH;
                            var nomh = rows[i].helado_sabor;
                        }
                        document.getElementById('totalH').innerHTML = parseInt(BST.searchLeft(root2));
                        document.getElementById('cantidadH').innerHTML = cantih;
                        document.getElementById('heladoMin').innerHTML = nomh;
                    }
                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].totalH == ultimo) {

                            var cantih2 = rows[i].cantidadH;
                            var nomh2 = rows[i].helado_sabor;
                        }
                        document.getElementById('totalHH').innerHTML = parseInt(BST.searchRight(root2));
                        console.log(ultimo);
                        document.getElementById('cantidadHH').innerHTML = parseInt(cantih2);
                        document.getElementById('heladoMax').innerHTML = nomh2;
                    }

                    var root = BST.getRootNode();
                    console.log("inorder helado");
                    BST.inorder(root);
                }
            });

            $query = `SELECT SUM(cantidad_helados) AS cantidadH, cono_tipo, SUM(total_cono) as totalC FROM ventas_menu GROUP BY cono_tipo;`;
            conexion.query($query, function (err, rows, fields) {
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
                        //insert(data)
                        //remove(data)

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

                        searchRight(node) {
                            while (true) {
                                var nodeBefor = node;
                                node = node.right;
                                if (node == null) {
                                    return nodeBefor.data;
                                }
                            }
                        }
                        searchLeft(node) {
                            while (true) {
                                var nodeBefor = node;
                                node = node.left;
                                if (node == null) {
                                    return nodeBefor.data;
                                }
                            }
                        }

                        search(node, data) {
                            if (node === null) {
                                return "";
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
                        BST.insert(parseInt(rows[i].totalC));
                    };

                    var root2 = BST.getRootNode();
                    console.log("Dato encontrado" + " " + BST.searchLeft(root2));
                    console.log("Dato encontrado" + " " + BST.searchRight(root2));

                    var primero = parseInt(BST.searchLeft(root2));
                    console.log(primero);
                    //var tam1 = rows.length - 1;
                    var ultimo = parseInt(BST.searchRight(root2));
                    console.log(ultimo);

                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].totalC == primero) {
                            console.log(primero);
                            var cantih = rows[i].cantidadH;
                            var nomh = rows[i].cono_tipo;
                        }
                        document.getElementById('totalC').innerHTML = parseInt(BST.searchLeft(root2));
                        document.getElementById('cantidadC').innerHTML = cantih;
                        document.getElementById('conoMin').innerHTML = nomh;
                    }
                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].totalC == ultimo) {

                            var cantih2 = rows[i].cantidadH;
                            var nomh2 = rows[i].cono_tipo;
                        }
                        document.getElementById('totalCC').innerHTML = parseInt(BST.searchRight(root2));
                        document.getElementById('cantidadCC').innerHTML = cantih2;
                        document.getElementById('conoMax').innerHTML = nomh2;
                    }

                    var root = BST.getRootNode();
                    console.log("inorder cono");
                    BST.inorder(root);
                }
            });
            //decoracion
            $query = `SELECT SUM(cantidad_helados) AS cantidadH, decoración, SUM(total_decoracion) as totalD FROM ventas_menu GROUP BY decoración;`;
            conexion.query($query, function (err, rows, fields) {
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
                        //insert(data)
                        //remove(data)

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

                        searchRight(node) {
                            while (true) {
                                var nodeBefor = node;
                                node = node.right;
                                if (node == null) {
                                    return nodeBefor.data;
                                }
                            }
                        }
                        searchLeft(node) {
                            while (true) {
                                var nodeBefor = node;
                                node = node.left;
                                if (node == null) {
                                    return nodeBefor.data;
                                }
                            }
                        }

                        search(node, data) {
                            if (node === null) {
                                return "";
                            } else {
                                if (data < node.data) {
                                    return this.search(node.left, data);
                                } else {
                                    if (data > node.data) {
                                        return this.search(node.right, data);
                                    } else {
                                        return node.data;
                                    }
                                }
                            }
                        }
                    }
                    var BST = new BinarySearchTree();
                    for (var i = 0; i < rows.length; i++) {
                        BST.insert(parseInt(rows[i].totalD));
                    };

                    var root2 = BST.getRootNode();
                    console.log("Dato encontrado" + " " + BST.searchLeft(root2));
                    console.log("Dato encontrado" + " " + BST.searchRight(root2));

                    var primero = parseInt(BST.searchLeft(root2));
                    console.log(primero);
                    //var tam1 = rows.length - 1;
                    var ultimo = parseInt(BST.searchRight(root2));
                    console.log(ultimo);

                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].totalD == primero) {
                            console.log(primero);
                            var cantih = rows[i].cantidadH;
                            var nomh = rows[i].decoración;
                        }
                        document.getElementById('totalD').innerHTML = parseInt(BST.searchLeft(root2));
                        document.getElementById('cantidadD').innerHTML = cantih;
                        document.getElementById('decoracionMin').innerHTML = nomh;
                    }
                    for (let i = 0; i < rows.length; i++) {
                        if (rows[i].totalD == ultimo) {

                            var cantih2 = rows[i].cantidadH;
                            var nomh2 = rows[i].decoración;
                        }
                        document.getElementById('totalDD').innerHTML = parseInt(BST.searchRight(root2));
                        document.getElementById('cantidadDD').innerHTML = cantih2;
                        document.getElementById('decoracionMax').innerHTML = nomh2;
                    }

                    var root = BST.getRootNode();
                    console.log("inorder decoracion");
                    BST.inorder(root);
                }
            });

        }
    });
}