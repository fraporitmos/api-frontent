const mysqlConection = require("../database/mysqlConnection");

const updateUser = async (req, res) => {
    //Desestructurar un objecto 
    const { names, phone, email, id_user } = req.body
    try {

        const result = await mysqlConection.query(`UPDATE users SET names = '${names}', phone = '${phone}', email = '${email}' WHERE users.id = ${id_user}`);

        if (result.serverStatus === 2) {
            res.status(200).json({
                msg: "Usuario actualizado correctamente."
            })
        }

    } catch (error) {
        res.status(500).json({
            msg: error,
        });
    }
};

module.exports = { updateUser }