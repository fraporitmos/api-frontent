const pool = require("../database/mysqlConnection");

const getUsers = async (req, res) => {
  try {

    const result = await pool.query(`SELECT * FROM users;`); 
    res.status(200).json({
      users: result, 
    });


  } catch (error) {
    res.status(500).json({
      msg: error, 
    });
  }
};

module.exports = { getUsers };