const express = require("express")
const mongoose = require("mongoose")
const cookieParser = require("cookie-parser")
const dotenv = require("dotenv")
const cors =require("cors")
const app = express()
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

app.use(express.json())
app.use(cors())
app.use(cookieParser())
dotenv.config()
const PORT = process.env.PORT||30000
const server = app.listen(PORT,() => {
    console.log(`Listening on PORT: ${PORT}`)
})
mongoose.connect(process.env.URL_MONGODB,()=>{
    console.log("Connected to DB")
})
app.use(express.static(path.join(__dirname, '../front/build')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../front/build/index.html'))
})
app.use('/',authRoute)
app.use('/main',userRoute)
