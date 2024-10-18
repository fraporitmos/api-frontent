CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    names VARCHAR(70) NOT NULL,
    phone VARCHAR(9) NOT NULL,
    email VARCHAR(50)
)

CREATE TABLE product(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product VARCHAR(70) NOT NULL,
    weight VARCHAR(9) NOT NULL,
    stock INT NOT NULL,
    img VARCHAR(200) NOT NULL DEFAULT 'https://ctppxztfz8.execute-api.us-west-2.amazonaws.com/v1/photo-server/products/empty-img.jpg'
)



CREATE TABLE ticket(
    id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    id_user INT NOT NULL,
    id_product INT NOT NULL,
    cantidad INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP
)


CREATE VIEW user_product_info AS
SELECT 
TI.id, US.names,US.phone,US.email,
PR.product,PR.weight,PR.img,
PR.price ,TI.cantidad,TI.fecha
FROM ticket TI 
INNER JOIN users US ON 
TI.id_user = US.id 
INNER JOIN product PR ON
TI.id_product = PR.id


SELECT
 TI.id AS id,
 (TI.cantidad * PR.price) AS ganacia,
month(TI.fecha) AS mes

FROM ticket TI JOIN product PR
ON TI.id_product = PR.id
ORDER BY TI.id ASC
