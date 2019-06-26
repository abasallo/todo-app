import bodyParser from 'body-parser'
import express from 'express'
import methodOverride from 'method-override'
import restify from 'express-restify-mongoose'

import corsMiddleware from 'cors'
import jwtMiddleware from './middleware/jwt'

import todo from './model/todo'

const router = express.Router()
const app = express()

app.use(jwtMiddleware)
app.use(corsMiddleware())

app.use(bodyParser.json())
app.use(methodOverride())

restify.serve(router, todo)

app.use(router)

export default app
