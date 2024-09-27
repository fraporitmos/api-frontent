const mysqlConection = require('../../database/mysqlConnection');

const updateProduct = async (req, res) => {
    const { product, price, weight, stock, img, id_product } = req.body

    try {
        const result = await mysqlConection.query(`UPDATE product SET 
        product = '${product}', price = '${price}', weight = '${weight}',
        stock = '${stock}', img = '${img}' WHERE product.id = ${id_product};`);

        if (result.serverStatus === 2) {
            res.status(200).json({
                msg: "Producto actualizado correctamente.",
            })
        } else {
            res.status(200).json({
                msg: 'No se pudo actualizar el producto.',
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
};

module.exports = { updateProduct };