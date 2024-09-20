const express = require('express')
const userRoutes = require("./routes/userRoutes")

const app = express()
const port = 3000

//Middleware  para permitir manejar json
app.use(express.json())

app.use('/api', userRoutes)

app.listen(port, ()=>{
    console.log(`✅ Api ejecutandose en: ${port}`)
})