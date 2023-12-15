const express = require("express")
const router = express.Router()
const {index, show} = require("../controllers/editControllers.js")
//const {index, show} = require("../controllers/editControllers.js")



/// defino los controladores

router.get("/", index)
router.get("/:id", show)

module.exports = router