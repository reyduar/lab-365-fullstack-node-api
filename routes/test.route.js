const { Router } = require("express");
const {
  testGet,
  testPost,
  testPut,
  testPatch,
  testDelete,
} = require("../controllers/test.controller");

const router = new Router();

router.get("/ex4/:name", (req, res) => {
  const nome = req.params.name;
  const response = `Rota de API criada pelo(a): ${nome}`;
  console.log(response);
  res.send(response);
});

router.get("/", testGet);
router.post("/", testPost);
router.put("/", testPut);
router.patch("/", testPatch);
router.delete("/", testDelete);

module.exports = router;
