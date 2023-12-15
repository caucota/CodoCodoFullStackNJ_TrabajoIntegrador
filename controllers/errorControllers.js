const styleSheetOwn = "/stylesheets/error.css"


module.exports={
    index:(req,res)=>{
        res.render ("error", {title:"Error Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn, mensajeError:"Upss Error"} ) 
    },

}