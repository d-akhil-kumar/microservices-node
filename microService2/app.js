const hydraExpress = require('hydra-express')
const express = hydraExpress.getExpress()
const app = express.Router()
const router = require('./router')

hydraExpress.init('./config.json', ()=>{
    app.use(router)

    hydraExpress.registerRoutes({'/service2':app})
})