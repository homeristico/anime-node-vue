// importar modelo
const UserModel = require('./../models/UserModel');



const register = async (req, res) => {
  res.json({
    mensaje: 'hola homer'
  });
}



module.exports = {register};
