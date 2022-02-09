const controller = require("../controllers/musicController");

const express = require("express");
const router = express.Router();

router.get("/catalogo", controller.getAll);
router.get("/:id", controller.getById);
router.post("/criar", controller.createMusic);
router.patch("/update/:id", controller.updateTitle);
router.put("/update/:id", controller.updateMusic);

module.exports = router;