const mysqlConection = require("../../database/mysqlConnection");

const getGainMonth = async (req, res) => {
  try {
    const result = await mysqlConection.query(`SELECT * FROM report_gain_month  ORDER BY id DESC`);

    if (Object.keys(result).length > 0) {
      res.status(200).json({
        reporte: result,
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

module.exports = { getGainMonth };