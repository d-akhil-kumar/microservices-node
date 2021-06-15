const hydraExpress = require('hydra-express')
const express = hydraExpress.getExpress()
const router = express.Router()

const hydra = hydraExpress.getHydra()

router.get('/', async (req,res,next)=> {

    const message = hydra.createUMFMessage(
        {
            to: 'microservice_1:[get]/service1',
            from: 'microService_2',
            body: {}
        }
    )

    const data = await hydra.makeAPIRequest(message)

    res.status(200).json({
        msg: "Hello from service 2, " + data.msg,        
    })    
})

module.exports = router