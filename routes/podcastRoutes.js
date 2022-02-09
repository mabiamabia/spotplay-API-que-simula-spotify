const controller = require("../controllers/podcastController");

const express = require("express");
const router = express.Router();

router.get("/catalogo", controller.getAll);
router.get("/:id", controller.getById);
router.post("/criar", controller.createPodcast);
router.patch("/update/:id", controller.updateTitle);
router.put("/update/:id", controller.updatePodcast);

module.exports = router;