const { Router } = require("express");
const { check } = require("express-validator");
const { eUsuarioLider } = require("../middlewares/validar-novo-usuario");
const { usuarioIdExiste } = require("../middlewares/validar-id-usuario");
const {
  getUsers,
  newUser,
  updateUser,
  deleteUser,
} = require("../controllers/usuario.controller");

const router = new Router();

router.get("/", getUsers);
router.post(
  "/",
  [
    eUsuarioLider,
    check("nome").isLength({ min: 4 }),
    check("senha").isLength({ min: 4 }),
  ],
  newUser
);
router.put(
  "/:id",
  [
    check("id", "MongoId invalido").isMongoId(),
    check("id").custom(usuarioIdExiste),
  ],
  updateUser
);
router.delete(
  "/:id",
  [
    check("id", "MongoId invalido").isMongoId(),
    check("id").custom(usuarioIdExiste),
  ],
  deleteUser
);

module.exports = router;
