const { Router } = require("express");
const { check } = require("express-validator");
const { eUsuarioLider } = require("../middlewares/validar-cargo");
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
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
