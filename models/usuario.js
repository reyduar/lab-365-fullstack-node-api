const { Schema, model } = require("mongoose");
const UsuarioSchema = Schema({
  nome: {
    type: String,
  },
  idade: {
    type: Number,
  },
  cargo: {
    type: String,
  },
  senha: {
    type: String,
  },
});

module.exports = {
  Usuario: model("Usuario", UsuarioSchema),
};
