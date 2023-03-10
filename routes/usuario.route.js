const { Router } = require("express");
const { check } = require("express-validator");
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
  [check("nome").isLength({ min: 5 }), check("senha").isLength({ min: 4 })],
  newUser
);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
