const { request, response } = require("express");

const getUsers = (req = request, res = response) => {
  res.json({
    message: "GET API Usuario Controller",
  });
};

const newUser = (req = request, res = response) => {
  const body = req.body;
  res.status(201).json({
    message: "Usuário criado com sucesso",
    body: body,
  });
};

const deleteUser = (req = request, res = response) => {
  const { id } = req.params;
  res.json({
    message: `Usuário (${id}) borrado com éxito`,
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
