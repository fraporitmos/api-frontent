const mysqlConection = require("../database/mysqlConnection");

const getUsers = async (req, res) => {
  try {

    const result = await mysqlConection.query(`SELECT * FROM users`);

    if (Object.keys(result).length > 0) {
      res.status(200).json({
        usuarios: result,
      });

    } else {
      res.status(200).json({
        mensaje: "No hay usuarios por ahora.",
      });
    }


  } catch (error) {
    res.status(500).json({
      msg: error,
    });
  }
};

module.exports = { getUsers };