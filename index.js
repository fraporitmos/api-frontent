const express = require('express')
const userRoutes = require("./routes/userRoutes")
const productRoutes = require("./routes/productRoutes")
const orderRoutes = require("./routes/orderRoutes")

const app = express()
const port = 3000
const cors = require('cors');

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PATCH', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  };

  //Middewares
app.use(cors(corsOptions));
app.use(express.json())

app.use('/api', userRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)

app.listen(port, ()=>{
    console.log(`✅ Api ejecutandose en: ${port}`)
})