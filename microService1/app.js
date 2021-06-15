const hydraExpress = require('hydra-express')
const express = hydraExpress.getExpress()
const app = express.Router()

const router = require('./router')

hydraExpress.init('./config.json', ()=> {

    //all your middlewares, error, logger etc etc
    app.use(router)

    hydraExpress.registerRoutes({'/service1':app})
})