const express = require("express")
const router = express.Router()
const {index, show} = require("../controllers/shopControllers.js")


/// defino los controladores

router.get("/", index)
router.get("/:collection", show)

module.exports = router