const mongoose = require('mongoose')

const config = {
  useUnifiedTopology: true,
  useNewUrlParser: true
}

mongoose
  .connect('mongodb://127.0.0.1:27017/blog', config)
  .catch(e => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db