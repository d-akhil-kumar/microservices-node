const hydraExpress = require('hydra-express')
const express = hydraExpress.getExpress()
const router = express.Router()

router.get('/', (req,res,next) => {
    res.status(200).json({
        msg: 'Hello from service 1'
    })
})

module.exports = router