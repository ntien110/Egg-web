const express = require("express")
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded())

app.post("/register", (req, res)=> {
    let body = req.body

    if (Object.keys(body).length === 0){
        console.log("Request'body is empty.")
    } else {
        console.log(`Request's data: `)
        for (let key in body){
            console.log(`\t${key}: ${body[key]}`)
        }
    }
    console.log("---------------------------------------------------")
    res.send("Server received request. Check server's log for more detail.")
});

app.listen(3000, ()=>console.log("Server started."))