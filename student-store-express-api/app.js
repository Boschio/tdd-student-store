const express = require("express")
const morgan = require("morgan")
const { NotFoundError } = require("./utils/errors")
const cors = require("cors")
const storeRouter = require("./routes/store")


const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(cors())
app.use("/", storeRouter)

app.get('/', async (req, res, next) => {
    res.status(200).send({ "ping": "pong" })
})

//error handling
app.use((req,res,next) => {
    return next(new NotFoundError())
})

app.use((error,req,res,next) => {
    const status = error.status || 500
    const message = error.message

    return res.status(status).json({
        error: {message, status}
    })
})

module.exports = app