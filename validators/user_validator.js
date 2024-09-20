const {check} = require("express-validator");
const {validateBody} = require("../helpers/validateBody")

 const user_validator = [
    check("email","El correo es obligatorio.").not().isEmpty(),
    check("email","El correo está vacio.").isEmail(),
    (req ,res,next) => {
        validateBody(req,res,next);
    }
    
];

module.exports = {user_validator}