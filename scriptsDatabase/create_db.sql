CREATE TABLE `db_dress_factory`.`company` (
  `company_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `img` VARCHAR(45) NULL,
  `description` VARCHAR(400) NULL,
  `contact_info` VARCHAR(400) NULL,
  PRIMARY KEY (`company_id`));

--values

INSERT INTO db_dress_factory.company (name, img, description, contact_info)
VALUES ('LOUIS BARTON',
NULL,
'Inició sus actividades en el año 1990, vendiendo sus productos en los más importantes almacenes de cadena. En el año de 1992, cambio su estrategia comercial abriendo sus propios puntos de venta. En la actualidad cuenta con 26 almacenes, ubicados en Bogotá, Medellín, Pasto, Tuluá y Pereira.',
'Corregimiento Caimalito,
Zona franca internacional de Pereira,
Bodega B 36, Pereira-Risaralda

Telephones: (+57)(6) 315 3742 – 315 3731

info@louisbarton.com');

CREATE TABLE `db_dress_factory`.`product` (
  `product_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `img` VARCHAR(45) NULL,
  `price` INT NOT NULL,
  `detail` VARCHAR(400) NULL,
  `company_id` INT  NOT NULL,
  `category_id` INT  NOT NULL,
  PRIMARY KEY (`product_id`));

 CREATE TABLE `db_dress_factory`.`category` (
  `category_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`category_id`));

  INSERT INTO db_dress_factory.category (name) VALUES ('Camisas Formales');
   INSERT INTO db_dress_factory.category (name) VALUES ('Pantalones Formales');
    INSERT INTO db_dress_factory.category (name) VALUES ('Chaquetas');

 CREATE TABLE `db_dress_factory`.`client` (
  `client_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `number` VARCHAR(50) NOT NULL,
  `document_type` VARCHAR(50) NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`client_id`));


   CREATE TABLE `db_dress_factory`.`order` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `client_id` INT NOT NULL,
  `delivery_date` DATETIME NOT NULL,
  `total_price` INT NOT NULL,
  PRIMARY KEY (`order_id`));

  CREATE TABLE `db_dress_factory`.`order_dtl` (
  `order_dtl_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  PRIMARY KEY (`order_dtl_id`));


  