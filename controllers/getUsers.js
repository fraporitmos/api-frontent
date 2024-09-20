const mysqlConection = require("../database/mysqlConnection");

const getUsers = async (req, res) => {
  try {

    const result = await mysqlConection.query("SELECT * FROM  sdfusers"); 
    console.log(result)


  } catch (error) {
    res.status(500).json({
      msg: error, 
    });
  }
};

module.exports = { getUsers };