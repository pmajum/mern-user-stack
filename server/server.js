import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})

console.info('Mongo DB connection %s', config.mongoUri)

/*mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})*/
