const fs = require("fs")
const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))
const styleSheetOwn = "/stylesheets/item.css"


module.exports={
    index:(req,res)=>{
        res.render ("shop", {title:"Shop Funkos", author:"Caucota Federico", funkos: funkos, styleSheetOwn: styleSheetOwn} ) 
    },

    show: (req,res)=>{
        const nombreFunko = req.params.funko
        const unFunko = funkos.find(funko => funko.name==nombreFunko)
        res.render ("item", {title:"Item Funkos", author:"Caucota Federico", funko: unFunko, styleSheetOwn: styleSheetOwn} ) 
    },

}