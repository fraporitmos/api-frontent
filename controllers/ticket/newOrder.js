const { body } = require('express-validator');
const mysqlConnection = require('../../database/mysqlConnection');
const mysqlConection = require('../../database/mysqlConnection');
const { updateStock } = require('./updateStock');

const newOrder = async (req, res) => {

    const { id_user, id_product, cantidad } = req.body
    var stockAvailable = 0
    var stockUpdated = 0

    try {
        const infoProduct = await mysqlConnection.query(`SELECT * FROM product WHERE id = '${id_product}';`)

        if (Object.keys(infoProduct).length > 0) {
            stockAvailable = infoProduct[0].stock

            if (cantidad <= stockAvailable) {
                try {
                    const result = await mysqlConection.query(`
                            INSERT INTO ticket (id, id_user, id_product, cantidad,fecha) 
                            VALUES (NULL, '${id_user}', '${id_product}', ${cantidad}, CURRENT_TIMESTAMP);`);
                    stockUpdated = stockAvailable - cantidad
                    res.status(200).json({
                        msg: "Ticket generado correctamente.",
                        id: result.insertId,
                        stock: stockUpdated
                    })

                    const isStockUpdate = await updateStock(id_product, stockUpdated, res)

                } catch (error) {
                    console.log(error)
                    res.status(500).json({
                        msg: "Revisa la información de tus datos",
                        sqlError: error.message,
                    });
                }


            } else {
                res.status(200).json({
                    msg: "No hay stock suficiente.",
                });
            }

        } else {
            res.status(400).json({
                msg: "Error al leer información del producto. ",
            });
        }


    } catch (error) {
        res.status(500).json({
            msg: error.message,
        });
    }
};

module.exports = { newOrder };