const express = require("express")
const router = express.Router()
const {index} = require("../controllers/adminControllers.js")



/// defino los controladores

router.get("/", index)

module.exports = router