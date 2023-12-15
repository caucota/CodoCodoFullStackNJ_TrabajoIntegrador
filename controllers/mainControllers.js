const fs = require("fs")
const collections = JSON.parse(fs.readFileSync("./data/collections.json", "utf-8"))
const funkosTodos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))
const styleSheetOwn = "/stylesheets/main.css"


module.exports={
    index : (req,res)=>{
        const funkos = funkosTodos.filter((unFunko)=>(unFunko.licencia=="Nueva Suscripción") )

        res.render ("main", {title:"Home Funkos", author:"Caucota Federico", collections: collections, funkos: funkos, styleSheetOwn:styleSheetOwn} ) 
    },

    indexAdmin : (req, res)=>{
        
    }

}