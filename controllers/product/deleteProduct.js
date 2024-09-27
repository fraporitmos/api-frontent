const mysqlConection = require('../../database/mysqlConnection');

const deleteProduct = async (req, res) => {
    const { id_product } = req.body
    try {
        const result = await mysqlConection.query(`DELETE FROM product WHERE product.id = ${id_product}`);

        if (Object.keys(result).length > 0) {
            res.status(200).json({
                msg: "Eliminado correctamente",
            });
        } else {
            res.status(200).json({
                msg: 'No se pudo eliminar el producto',
            });
        }
    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
};

module.exports = { deleteProduct };