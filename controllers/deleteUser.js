const mysqlConection = require("../database/mysqlConnection");

const deleteUser = async (req, res) => {
    //Desestructurar un objecto 
    const { id_user } = req.body
    try {

        const result = await mysqlConection.query(`DELETE FROM users WHERE users.id = ${id_user}`);
        if (result.serverStatus === 2) {
            res.status(200).json({
                msg: "Usuario eliminado correctamente."
            })
        }

    } catch (error) {
        res.status(500).json({
            msg: error,
        });
    }
};

module.exports = { deleteUser }