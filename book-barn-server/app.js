const express = require("express")
const app = express()
const sequelize = require("sequelize")
const cors = require("cors")

app.listen(8080, () => {
    console.log("server running on 8080")
})