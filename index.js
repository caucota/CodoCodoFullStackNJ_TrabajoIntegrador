const express = require("express")
const path = require("path")


const  port = 3000

const app = express() 


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use( express.static(path.join(__dirname,"public")))

/*Rutas */
const mainRouter = require("./routes/main")
const shopRouter = require("./routes/shop")
const itemRouter = require("./routes/item")
const cartRouter = require("./routes/cart")
const loginRouter = require("./routes/login")
const contactoRouter = require("./routes/contacto")
const registroRouter = require("./routes/register")
const errorRouter = require("./routes/error")
const adminRouter = require("./routes/admin")
const editItemRouter = require("./routes/edit")
const createItemRouter = require("./routes/create")

app.use("/", mainRouter)
app.use('/shop', shopRouter)
app.use('/shop/:collection', shopRouter)
app.use("/item", itemRouter)
app.use("/item/:funko", itemRouter)
app.use("/cart", cartRouter)
app.use("/login", loginRouter)
app.use("/contacto", contactoRouter)
app.use("/register", registroRouter)
app.use("/error", errorRouter)
app.use("/admin", adminRouter)
app.use("/edit/:id", editItemRouter)
app.use("/create", createItemRouter)


app.listen(port, ()=>{
    console.log(`Servidor ok ${port}`);
})