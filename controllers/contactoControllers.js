const styleSheetOwn ="/stylesheets/contacto.css"

module.exports={
    index : (req,res)=>{
        res.render ("contacto", {title:"Contacto Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn} ) 
    },

}