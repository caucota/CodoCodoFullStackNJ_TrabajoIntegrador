const fs = require("fs")
const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))

const styleSheetOwn ="/stylesheets/admin.css"

module.exports={
    index : (req,res)=>{
        res.render ("admin", {title:"Listado Productos Funkos", author:"Caucota Federico", funkos: funkos, styleSheetOwn: styleSheetOwn} ) 
    },

}