import mongoose from 'mongoose'

import app from './server-helper'
import config from './config'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoDB.url)

app.listen(config.port, () => {
    console.log('%s on port %d.', config.name, config.port)
})
