const fs = require("fs")
const users = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"))

const routeStylesSheeet = "/stylesheets"
const styleSheetOwn = routeStylesSheeet +"/login.css"

module.exports={
    index : (req,res)=>{

        res.render ("login", {title:"Login Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn} ) 
    },

    ingresar: (req, res)=>{

        const nombreUsuario = req.params.usuario;
        const passwordUsuario = req.params.password;
        const user = users.filter((unUsuario)=>unUsuario.nombre==req.params.usuario);
        /*         if ((user !== undefined) && (user.password == passwordUsuario) && (passwordUsuario !== undefined)){ 
        */
        if ((user !== undefined)){
        //    res.send( "Usuario Registrado " + passwordUsuario);
            if(true===true){
             //if(user.nombre == "admin"){
                const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8")) 
                res.render("admin",  {title:"Admin Funkos", author:"Caucota Federico", funkos: funkos, styleSheetOwn: routeStylesSheeet +"/admin.css"} );
             }else{
                 //res.redirect("/");
                 //res.render( "main", {title:"Error Funkos", author:"Caucota Federico", styleSheetOwn: "/stylesheets/error.css"} );
                 return res.redirect('/');

             }
        }else{
            res.render( "error", {title:"Error Funkos", author:"Caucota Federico", styleSheetOwn: "/stylesheets/error.css",  mensajeError:"Usuario no Registrado"} );
        }
    }

}