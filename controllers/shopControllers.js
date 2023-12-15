const fs = require("fs")
const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))
const styleSheetOwn ="/stylesheets/shop.css"

module.exports={
    index : (req,res)=>{
        res.render ("shop", {title:"Shop Funkos", author:"Caucota Federico", funkos: funkos, styleSheetOwn: styleSheetOwn, filtro:""} ) 
    },

    show : (req,res)=>{
        console.log("Por Show")
        const nombreCollection = req.params.collection
        const listaFunkos = funkos.filter(funko => funko.collection==nombreCollection)

        res.render ("shop", {title:"Shop Funkos", author:"Caucota Federico", funkos: listaFunkos, styleSheetOwn: styleSheetOwn, filtro:nombreCollection} ) 
    },

}