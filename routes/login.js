const express = require("express")
const router = express.Router()
const {index, ingresar} = require("../controllers/loginControllers.js")



/// defino los controladores

router.get("/", index)
router.post("/", ingresar) /*solo para simular un ingreso sin un usuario*/
router.post("/:usuario", ingresar)


module.exports = router