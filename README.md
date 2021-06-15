1. npm install hydra-express
2. const hydraExpress = require('hydra-express')
3. const express = hydraExpress.getExpress()

4. 
    a. const app = express.Router()
    b. const router = express.Router()

5. [install](https://github.com/microsoftarchive/redis/releases/latest) and start redis server

6. create config.json file
        {
            "hydra": {
                "serviceName": "microService_1",
                "serviceIP": "",
                "servicePort": 8182,
                "serviceType": "",
                "serviceDescription": "Simple microservice 1",
                "redis": {
                    "url": "127.0.0.1",
                    "port": 6379,
                    "db": 15
                }
            }
        }
        

7. setup microservice

        hydraExpress.init('./config.json', ()=> {

            //all your middlewares, error, logger etc etc
            app.use(router)

            hydraExpress.registerRoutes({'/service1':app})
        })
