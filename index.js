const express = require('express')
const cors = require('cors')

const db = require ('./db')
const routes = require('./routes')

const app = express()
const port = 3001

app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(express.json())

db.on('error', () => {
    console.log('Error! Failed to connect to MongoDB.')
})

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})