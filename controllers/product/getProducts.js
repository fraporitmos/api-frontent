const mysqlConection = require("../../database/mysqlConnection");

const getProducts = async (req, res) => {
  try {
    const result = await mysqlConection.query(`SELECT * FROM product;`);

    if (Object.keys(result).length > 0) {
      res.status(200).json({
        productos: result,
      });
    } else {
      res.status(200).json({
        msg: 'No data found',
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = { getProducts };