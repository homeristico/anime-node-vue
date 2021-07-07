// importar modelo
const UserModel = require('./../models/UserModel');

// importar validaciones
const {userRegisterValidation} = require('./../validations/UserValidations');



const register = async (req, res) => {

  const RegisterValidation = userRegisterValidation.validate(req.body);

  if(RegisterValidation.error){
      return res.status(400).json({
        error: RegisterValidation.error.details[0].message
      });
  }

  const user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });

  try {
    const resMongo = await user.save();
    res.json({
      error:null,
      data: resMongo
    });
  } catch (e) {
    res.status(400).json(error);
  }

}



module.exports = {register};
