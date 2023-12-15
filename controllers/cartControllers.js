const fs = require("fs")
const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))
const styleSheetOwn = "/stylesheets/cart.css"


module.exports={
    index:(req,res)=>{
        res.render ("cart", {title:"Carrito Compras Funkos", author:"Caucota Federico", funkos: funkos, styleSheetOwn: styleSheetOwn} ) 
    },

    add: (req,res)=>{
        const nombreFunko = req.params.funko
        const unFunko = funkos.find(funko => funko.name==nombreFunko)
        /* agregar a storage, consultarlo y devolverlo a la vista */
        res.render ("cart", {title:"Carrito Compras Funkos", author:"Caucota Federico", funko: unFunko, styleSheetOwn: styleSheetOwn} ) 
    },

}