
const mysqlConection = require('../../database/mysqlConnection');

const updateStock = async (id_product, stock) => {
    try {
        const result = await mysqlConection.query(`UPDATE product SET stock = '${stock}'
         WHERE product.id = '${id_product}'`);
      
        return true;
    } catch (error) {
       return false;
    }
};



module.exports = { updateStock };