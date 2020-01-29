const express = require("express")
const app = express()
const sequelize = require("sequelize")
const cors = require("cors")
const models = require("./models")

app.use(express.json())
app.use(cors())



app.post("/submitbook", (req, res) => {

    console.log(req.body)

    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgURL = req.body.imgURL

    models.Books.create({
        title: title,
        genre: genre,
        publisher: publisher,
        year: year,
        imgURL: imgURL
    })
   
   
})


app.listen(8080, () => {
    console.log("server running on 8080")
})