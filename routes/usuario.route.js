const { Router } = require("express");
const {
  getUsers,
  newUser,
  updateUser,
  deleteUser,
} = require("../controllers/usuario.controller");

const router = new Router();

router.get("/", getUsers);
router.post("/", newUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

module.exports = router;
