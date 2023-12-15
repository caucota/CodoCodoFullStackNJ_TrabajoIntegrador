const fs = require("fs")
const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))

const styleSheetOwn ="/stylesheets/edit.css"

module.exports={
    index: (req,res)=>{
        console.log('hello index')
        const idFunko = req.params.id
        console.log(req.params)
        const unFunko = funkos.find(funko => funko.id==idFunko)
        res.render ("edit", {title:"Modificar Item Funkos", author:"Caucota Federico", funko: unFunko, styleSheetOwn: styleSheetOwn} ) 

    },
    show: (req,res)=>{
        console.log('hello show')
        const idFunko = req.params.id
        console.log(req.params)
        const unFunko = funkos.find(funko => funko.id==idFunko)
        res.render ("edit", {title:"Modificar Item Funkos", author:"Caucota Federico", funko: unFunko, styleSheetOwn: styleSheetOwn} ) 
    },

}



