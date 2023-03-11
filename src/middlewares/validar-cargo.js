const { response } = require("express");
const eUsuarioLider = (req, res = response, next) => {
  const { cargo } = req.body;
  if (cargo.toLowerCase() !== "lider") {
    return res.status(406).json({
      message:
        "Só poderá salvar se o cargo do usuário for igual a string 'Líder'",
    });
  }
  next();
};

module.exports = {
  eUsuarioLider,
};
