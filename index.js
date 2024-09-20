const express = require('express')
const userRoutes = require("./routes/userRoutes")

const app = express()
const port = 3000

//Middleware  para permitir manejar json
//localhost:3000/api/users
app.use(express.json())
app.use('/api', userRoutes)

app.listen(port, ()=>{
    console.log(`✅ Api ejecutandose en: ${port}`)
})