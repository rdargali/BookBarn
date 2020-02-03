const express = require("express")
const app = express()
const sequelize = require("sequelize")
const cors = require("cors")
const models = require("./models")

app.use(express.json())
app.use(cors())


app.get("/viewallbooks", (req, res) => {

    models.Books.findAll()
    .then(response => res.send(response))
    

})

app.get("/viewbook/:bookid", (req, res) => {
   
    models.Books.findOne({where: {id: req.params.bookid}})
    .then(response => res.send(response.dataValues))


    

})

app.post("/addbook", (req, res) => {

    

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

app.post("/updatebook", (req, res) => {

    

    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgURL = req.body.imgURL

    // models.Books.create({
    //     title: title,
    //     genre: genre,
    //     publisher: publisher,
    //     year: year,
    //     imgURL: imgURL
    // })
   
   
})

app.delete("/delete/:bookid", async (req,res) => {
   await models.Books.destroy(
        {
            where: {id: req.params.bookid}
        }
    )
    res.send("test")
})

app.put("/update/:bookid", async (req,res) => {

    console.log(req.params.bookid)
    console.log(req.body)

    let id = req.body.bookid
    let title = req.body.title
    let genre = req.body.genre
    let publisher = req.body.publisher
    let year = req.body.year
    let imgURL = req.body.title


    await models.Books.update(
        
        {
            
            title: title,
            genre: genre,
            publisher: publisher,
            year: year,
            imgURl: imgURL


        },

         {
             where: {id: req.params.bookid}
         }
     )
     
     res.send("test")
 })


app.listen(8080, () => {
    console.log("server running on 8080")
})