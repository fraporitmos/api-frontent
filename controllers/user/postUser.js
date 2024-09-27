const mysqlConection = require("../../database/mysqlConnection");

const postUser = async (req, res) => {
    //Desestructurar un objecto 
    const { names, phone, email } = req.body
    try {

        const result = await mysqlConection.query(`INSERT INTO users (id, names, phone, email) VALUES (NULL, '${names}' , '${phone}', '${email}' );`);

        //Cuando se inserta algo en la tabla
        if (result.serverStatus === 2) {
            res.status(200).json({
                msg: "Usuario registrado correctamente.",
                id :  result.insertId
            })
        } else {
            res.status(200).json({
                msg: 'No se puse insertar el usuario.',
            });
        }

    } catch (error) {
        res.status(500).json({
            msg: error,
        });
    }
};

module.exports = { postUser }