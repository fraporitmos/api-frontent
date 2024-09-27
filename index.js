const express = require('express')
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")

const app = express()
const port = 3000

//Middleware  para permitir manejar json
app.use(express.json())

app.use('/api', userRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)

app.listen(port, ()=>{
    console.log(`✅ Api ejecutandose en: ${port}`)
})