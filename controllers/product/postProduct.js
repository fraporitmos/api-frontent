
const mysqlConection = require("../../database/mysqlConnection");

const postProduct = async (req, res) => {
    const { product, price, weight, stock, img } = req.body

    try {
        const result = await mysqlConection.query(`
        INSERT INTO product(id, product, price, weight, stock, img)
        VALUES (NULL, '${product}', '${price}', '${weight}', '${stock}', '${img}');`);

        if (result.serverStatus === 2) {
            res.status(200).json({
                msg: "Producto registrado correctamente.",
                id: result.insertId
            })
        } else {
            res.status(200).json({
                msg: 'No se pudo registrar el producto',
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
};

module.exports = { postProduct };