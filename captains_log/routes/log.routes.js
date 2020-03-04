const express = require('express')
const router = express.Router()
const Log = require('../models/log.model')

router.get('/logs', (req, res) => {
    Log.find({}, (error, logs) => {
        if (error) { res.json({ error }) }
        else { res.json({ logs }) }
    })
})

router.get('/log/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (error) { res.json({ error }) }
        else {
            if (log) { res.json({ log }) }
            else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: `The Provided id ${req.params.id} does\'t match any documents`
                    }
                })
            }
        }
    })
})

router.post('/log', (req, res) => {
    Log.create(req.body, (error, log) => {
        if (error) { res.json({ error }) }
        else { res.json({ log }) }
    })
})

router.put('/log/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (error) { res.json({ error }) }
        else {
            if (log) {
                log.update(req.body, (error, log) => {
                    if (error) { res.json({ error }) }
                    else { res.end() }
                })
            }
            else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: `The Provided id ${req.params.id} does\'t match any documents`
                    }
                })
            }
        }
    })
})


router.delete('/log/:id', (req, res) => {
    Log.findById(req.params.id, (error, log) => {
        if (error) { res.json({ error }) }
        else {
            if (log) {
                log.remove(req, (error, log) => {
                    if (error) {
                        res.json({ error })
                    } else {
                        res.end()
                    }
                })
            } else {
                res.status(404).json({
                    error: {
                        name: 'DocumentNotFoundError',
                        message: `The Provided id ${req.params.id} does\'t match any documents`
                    }
                })
            }
        }
    })
})
module.exports = router