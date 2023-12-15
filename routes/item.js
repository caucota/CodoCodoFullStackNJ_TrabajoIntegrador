const express = require("express")
const router = express.Router()
const {index, show} = require("../controllers/itemControllers.js")



/// defino los controladores

router.get("/", index)
router.get("/:funko", show)

module.exports = router