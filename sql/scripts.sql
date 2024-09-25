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
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_product) REFERENCES product(id)
)