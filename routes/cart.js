const express = require("express")
const router = express.Router()
const {index, add} = require("../controllers/cartControllers.js")



/// defino los controladores

router.get("/", index)
router.get("/:funko", add)

module.exports = router