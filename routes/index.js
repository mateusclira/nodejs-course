const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.send('Hello from Router!')
})

router.get('/home', (req, res, next) => {
    res.render('home', null)
})

router.get('/json', (req, res, next) => {
    const data = {
        greeting: 'Hello World!'
    }
    res.json(data)
})

module.exports = router