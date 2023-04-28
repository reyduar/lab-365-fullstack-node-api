const { response } = require("express");
const eUsuarioLider = (req, res = response, next) => {
  const { cargo, idade } = req.body;
  if (cargo.toLowerCase() !== "líder") {
    return res.status(400).json({
      message: "Só poderá salvar se o cargo do usuário for igual a 'Líder'",
    });
  }
  if (idade < 21) {
    return res.status(406).json({
      message: "Usuário não possui idade suficiente",
    });
  }
  next();
};

module.exports = {
  eUsuarioLider,
};
