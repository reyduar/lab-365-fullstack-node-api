const { request, response } = require("express");
const { validationResult } = require("express-validator");
const { Usuario } = require("../models/usuario");

const getUsers = (req = request, res = response) => {
  res.json({
    message: "GET API Usuario Controller",
  });
};

const newUser = async (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(406).json({
      message: "Está faltando dados para concluir a operação",
      errors,
    });
  }
  const { nome, idade, cargo, senha } = req.body;

  const usuario = new Usuario({ nome, idade, cargo, senha });
  await usuario.save();
  res.status(201).json({
    message: "Usuário criado com sucesso",
    usuario,
  });
};

const deleteUser = async (req = request, res = response) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(406)
      .json({ message: "Está faltando dados para concluir a operação" });
  }

  const usuario = await Usuario.findOne({ _id: id });
  if (!usuario) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }
  await Usuario.findByIdAndDelete(id);
  res.status(200).json({
    message: "Usuário deletado com sucesso",
    usuario,
  });
};
const updateUser = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    message: `Usuário (${id}) atualizado com éxito`,
  });
};

module.exports = {
  getUsers,
  newUser,
  deleteUser,
  updateUser,
};
