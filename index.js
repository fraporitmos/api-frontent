const express = require('express')
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")

const app = express()
const port = 3000

//Middleware  para permitir manejar json
app.use(express.json())

app.use('/api', userRoutes)
app.use("/api", productRoutes)

app.listen(port, ()=>{
    console.log(`✅ Api ejecutandose en: ${port}`)
})