const { Console } = require("console")
const fs = require("fs")
const funkos = JSON.parse(fs.readFileSync("./data/funkos.json", "utf-8"))
const styleSheetOwn ="/stylesheets/shop.css"

module.exports={
    index : (req,res)=>{
        res.render ("shop", {title:"Shop Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn,  funkos: funkos, filtroItem:"", filtroCategoria:"", opcionOrden:"", precioMinimo:0, precioMaximo:0, chkNuevos:false} ) 
    },

    show : (req,res)=>{

        const precioMinimo = parseFloat(req.query.precioMinimo) || 0;
        const precioMaximo = parseFloat(req.query.precioMaximo) || 0; //Infinity;
        const ordenarPor = req.query.ordenarPor || 'asc';
        //const licencia = req.query.licence || '';
        const collection = req.query.collection || '';
        const buscar = req.query.buscar || '';
        const chkNuevos = req.query.chkNuevos || '';

        let listaFunkos = funkos

        if(precioMinimo > 0){
            listaFunkos = listaFunkos.filter (funko => funko.price>=precioMinimo);
        }
        if(precioMaximo > 0 ){
            console.log(precioMaximo)
            listaFunkos = listaFunkos.filter (funko => funko.price<=precioMaximo);
        }
        if (collection != '') {
            listaFunkos = listaFunkos.filter(funko => funko.collection.toUpperCase().includes(collection.toUpperCase() ))
        }
        if(buscar != ''){
            listaFunkos = listaFunkos.filter (funko => funko.name.toUpperCase().includes(buscar.toUpperCase()));
        }
        console.log(chkNuevos)
        switch (ordenarPor) {
            case 'asc':
                listaFunkos = listaFunkos.sort((a, b) => a.price - b.price);
            case 'desc':
                listaFunkos = listaFunkos.sort((a, b) => b.price - a.price);
            case 'Alf_A_Z':
                listaFunkos = listaFunkos.sort((a, b) => a.name.localeCompare(b.name, "es", {ignorePunctuation:true}));
            case 'Alf_Z_A':
                listaFunkos = listaFunkos.sort((a, b) => b.name.localeCompare(a.name));
            default:
                listaFunkos =  listaFunkos;
        }

        res.render ("shop", {title:"Shop Funkos", author:"Caucota Federico", styleSheetOwn: styleSheetOwn, funkos: listaFunkos, filtroItem:buscar, filtroCategoria:collection, opcionOrden:ordenarPor, precioMinimo:precioMinimo, precioMaximo:precioMaximo, chkNuevos:chkNuevos} ) 
    },

}