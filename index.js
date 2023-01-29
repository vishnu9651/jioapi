const express = require("express")

const elecData=require("./electronics.json")
const groceryData=require("./grocery.json")
const fashionData=require("./fashion.json")
const cors=require("cors")


const port =8080
const app = express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())


app.get("/electronics", (req, res) => {
    res.send(elecData.electronics)
})
app.get("/fashion", (req, res) => {
    res.send(fashionData.fashion)
})
app.get("/grocery", (req, res) => {
    res.send(groceryData.grocery)
})

app.listen(port, async () => {
    try {
    
        console.log("connected to db")
    } catch (err) {
        console.log(err)
    }
    console.log("port is running at 8080")
})