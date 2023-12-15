const styleSheetOwn ="/stylesheets/register.css"

module.exports={
    index : (req,res)=>{
        res.render ("register", {title:"Registro Nuevo Usuario Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn} ) 
    },

}