create database heladeria;
use heladeria;

create table empleado(
id_empleado int not null auto_increment,
nombre varchar (50) not null,
apellido_P varchar (50) not null,
apellido_M varchar (50) not null,
usuario varchar(50) not null,
contrasena varchar(10) not null,
edad int (10) not null,
puesto varchar(50) not null,
sueldo float(10)not null,
horario_E time,
horario_S time,
primary key (id_empleado)
);

INSERT INTO empleado (id_empleado, nombre, apellido_P, apellido_M, usuario, contrasena, edad, puesto, sueldo, horario_E, horario_S) 
VALUES 
#id_empleado, nombre, apellido_P, apellido_M, usuario, contrasena, edad, puesto, sueldo, horario_E, horario_S
('', 'Rocio', 'Galindo', 'Salazar', 'admin', '1234', '40', 'Supervisor', '5000', '6:00:00', '14:00:00'),
('', 'Roberto', 'Juarez', 'Rodriguez', 'user', '4321', '26', 'Empleado', '4000', '6:00:00', '14:00:00'),
('', 'Alejandro', 'Gutierrez', 'Martinez', 'A_Gutierrez_M', '9876543210', '29', 'Empleado', '3000', '6:00:00', '14:00:00'),
('', 'Carlos Alberto', 'Cruz', 'Dominguez', 'CA_Cruz_D', '1234567890', '23', 'Empleado', '100', '6:00:00', '14:00:00');

#('', 'Rocio', 'Galindo', 'Salazar', 'RoGa_Salazar', '1RGS40G562', '40', 'Gerente', '5000', '6:00:00', '14:00:00'),
#('', 'Roberto', 'Juarez', 'Rodriguez', 'RoJu_Rodriguez', '2RJR37S462', '26', 'Empleado', '4000', '6:00:00', '14:00:00'),

SELECT usuario,contrasena,puesto FROM empleado WHERE usuario = 'RoJu_Rodriguez' AND contrasena = '2RJR37S462';

create table nombres(
	id_nombre int not null,
	nombre varchar (50) not null
);

INSERT INTO nombres(id_nombre,nombre) VALUES(1,'x');

create table inventario(
id_producto int not null, #1, 2, 3
id_subproducto int not null, #101, 102, 103, 201...
tipo_producto varchar (20) not null, #Helado=1, cono=2, complementos=3
subtipo_producto varchar (50) not null, #Sabor, tamaño/sabor, nombre
cantidad_producto int not null,
tipo_cantidad varchar (10) not null, #Litros, unidades, otro
primary key (id_subproducto) #Aqui no estoy seguro
);

INSERT INTO inventario (id_producto, id_subproducto, tipo_producto, subtipo_producto, cantidad_producto, tipo_cantidad) 
VALUES 
#id_producto, id_subproducto, tipo_producto, subtipo_producto, cantidad_producto
('1', '101', 'Helado', 'Arandano','40', 'Litros'),
('1', '102', 'Helado', 'Cafe','40', 'Litros'),
('1', '103', 'Helado', 'Chicle','40', 'Litros'),
('1', '104', 'Helado', 'Chocolate','40', 'Litros'),
('1', '105', 'Helado', 'Choco-menta','40', 'Litros'),
('1', '106', 'Helado', 'Coco','40', 'Litros'),
('1', '107', 'Helado', 'Dulce de leche','40', 'Litros'),
('1', '108', 'Helado', 'Frambuesa','40', 'Litros'),
('1', '109', 'Helado', 'Fresa','40', 'Litros'),
('1', '110', 'Helado', 'Kit-Kat','40', 'Litros'),
('1', '111', 'Helado', 'Kiwi','40', 'Litros'),
('1', '112', 'Helado', 'Limon','40', 'Litros'),
('1', '113', 'Helado', 'Mango','40', 'Litros'),
('1', '114', 'Helado', 'Nueces','40', 'Litros'),
('1', '115', 'Helado', 'Oreo','40', 'Litros'),
('1', '116', 'Helado', 'Pistache','40', 'Litros'),
('1', '117', 'Helado', 'Piña','40', 'Litros'),
('1', '118', 'Helado', 'Queso-Zarzamora','40', 'Litros'),
('1', '119', 'Helado', 'Uva','40', 'Litros'),
('1', '120', 'Helado', 'Vainilla','40', 'Litros'),


('2', '201', 'Cono', 'Vainilla','100', 'Unidades'),
('2', '202', 'Cono', 'Galleta','100', 'Unidades'),
('2', '203', 'Cono', 'Sencillo','100', 'Unidades'),
('2', '204', 'Cono', 'Crepa','100', 'Unidades'),
('2', '205', 'Cono', 'Barquillo-Doble','100', 'Unidades'),
('2', '206', 'Cono', 'Marmoleado(VainillaChocolate)','100', 'Unidades'),
('2', '207', 'Cono', 'Chocolate','100', 'Unidades'),
('2', '208', 'Cono', 'Dos crepas','100', 'Unidades'), #Crepa doble (para que no se confunda como el de barquillo)
('2', '209', 'Vaso', 'Galleta','100', 'Unidades'),
('2', '210', 'Vaso', 'Carton-Pequeño','100', 'Unidades'),
('2', '211', 'Vaso', 'Carton-Mediano','100', 'Unidades'), #En caso de un solo vaso, que sea este
('2', '212', 'Vaso', 'Carton-Grande','100', 'Unidades'),


('3', '301', 'Chocolate', 'Chocolate-Avellana','10', 'Litros'),
('3', '302', 'Chocolate', 'Blanco','10', 'Litros'),
('3', '303', 'Chispas', 'Chocolate','5', 'Kilos'),
('3', '304', 'Chispas', 'Colores','5', 'Kilos'),
('3', '305', 'Chispas', 'M&Ms','5', 'Kilos'),
('3', '306', 'Galletas', 'Avena-Pasas','200', 'Unidades'),
('3', '307', 'Galletas', 'Chispas-Chocolate','200', 'Unidades'),
('3', '308', 'Galletas', 'Oreo','200', 'Unidades'), 
('3', '309', 'Galletas', 'Barra-Cremax-Chocolate','200', 'Unidades'),
('3', '310', 'Galletas', 'Barra-Cremax-Vainilla','200', 'Unidades'),
('3', '311', 'Galletas', 'Barra-Cremax-Fresa','200', 'Unidades'), #En caso de un solo sabor, que sea este
('3', '312', 'Varitas', 'Rollos-Chocolate','200', 'Unidades'), #En caso de un solo sabor, que sea este
('3', '313', 'Varitas', 'Rollos-Vainilla','200', 'Unidades'),
('3', '314', 'Varitas', 'Rollos-Fresa','200', 'Unidades');

create table helado(
id_helado int not null,
nombre varchar (50) not null,
precio int not null,
primary key (id_helado)
);

# ALTER TABLE `heladeria`.`helado` ADD CONSTRAINT `fk_HelaInv` FOREIGN KEY (`id_helado`) REFERENCES `heladeria`.`inventario` (`id_subproducto`) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO helado(id_helado, nombre, precio)
VALUES 
(101,'Helado Arandano',5),
(102,'Helado Cafe',6),
(103,'Helado Chicle',5),
(104,'Helado Chocolate',5),
(105,'Helado Chocomenta',5),
(106,'Helado Coco',6),
(107,'Helado Dulce de Leche',6),
(108,'Helado Frambuesa',7),
(109,'Helado Fresa',7),
(110,'Helado Kit Kat',5),
(111,'Helado Kiwi',6),
(112,'Helado Limón',7),
(113,'Helado Mango',6),
(114,'Helado Nata Nueces',7),
(115,'Helado Oreo',5),
(116,'Helado Pistache',7),
(117,'Helado Piña',6),
(118,'Helado Quezo Zarzamora',7),
(119,'Helado Uva',6),
(120,'Helado Vainilla',5);

create table cono(
id_cono int not null,
nombre varchar (50) not null,
precio int not null,
primary key (id_cono)
);

# ALTER TABLE `heladeria`.`decoracion` ADD CONSTRAINT `fk_DecoInv` FOREIGN KEY (`id_decoracion`)  REFERENCES `heladeria`.`inventario` (`id_subproducto`) ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO cono(id_cono, nombre, precio)
VALUES
(201,'Cono de Vainilla',5),
(202,'Cono de Galleta',7),
(203,'Cono Sencillo',5),
(204,'Cono Crepa',10),
(205,'Cono Doble',8),
(206,'Cono Marmoleado de Vainilla y Chocolate',15),
(207,'Cono de Chocolate',10),
(208,'Cono Crepa Doble',15),
(209,'Cono Vaso Galleta',15),
(210,'Vaso',10);

create table decoracion(
id_decoracion int not null,
nombre varchar(50) not null,
precio int not null,
primary key (id_decoracion)
);

# ALTER TABLE `heladeria`.`cono` ADD CONSTRAINT `fk_ConoInv` FOREIGN KEY (`id_cono`) REFERENCES `heladeria`.`inventario` (`id_subproducto`)  ON DELETE CASCADE  ON UPDATE CASCADE;

iNSERT INTO decoracion(id_decoracion, nombre, precio)
VALUES
(0,'Sin Decoracion',0),
(301,'Chispa Chocolate',3),
(302,'Chispas Colores',2),
(303,'Chocolate',3),
(304,'Chocolate Blanco',4),
(305,'Galleta Avena Pasas',5),
(306,'Galleta Chispas Chocolate',5),
(307,'Galleta Cremax',3),
(308,'Galleta Oreo',5),
(309,'M&Ms',5),
(310,'Varitas Chocolate',3);

create table ventas_menu(
id_ventas int not null auto_increment,
cantidad_helados int not null,
id_sabor int not null,
helado_sabor varchar (20) not null,
total_sabor int not null,
id_cono int not null,
cono_tipo varchar (20) not null,
total_cono int not null,
id_decoracion int not null,
decoración varchar (20),
total_decoracion int not null,
fecha varchar (20) not null,
total int not null,
primary key (id_ventas)
);

create table comprasgasto(
	id_compra int not null auto_increment,
    nombre varchar(50) not null,
    cantidad float not null,
    precio float not null,
    total float not null,
    fecha_compra varchar(50) not null,
    primary key (id_compra)
);
drop table comprasgasto;
insert into comprasgasto(id_compra,nombre,cantidad,precio,total,fecha_compra)
values
(0,'platos',20,2,40,'07/24/2022'),
(0,'servilletas',10,25,250,'07/24/2022'),
(0,'cucharas',25,20,500,'07/24/2022');