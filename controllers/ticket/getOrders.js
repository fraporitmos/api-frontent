const mysqlConection = require('../../database/mysqlConnection');
const getOrders = async (req, res) => {
  try {
    const result = await mysqlConection.query(`SELECT * FROM user_product_info`);

    if (Object.keys(result).length > 0) {
      res.status(200).json({
        ventas: result,
      });
    } else {
      res.status(200).json({
        message: 'No data found',
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = { getOrders };