const styleSheetOwn ="/stylesheets/create.css"

module.exports={
    index : (req,res)=>{
        res.render ("create", {title:"Nuevo Item Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn} ) 
    },

}