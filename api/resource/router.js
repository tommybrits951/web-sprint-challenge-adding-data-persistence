const router = require('express').Router();
const Resources = require('./model');


router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getAll();
        res.status(200).json(resources)
    } catch (err) {
        next(err)
    }
})


router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const resource = await Resources.getById(id)
        res.status(200).json(resource)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const resource = await Resources.insert(req.body)
        res.status(201).json(resource)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(err.status || 500).json({message: err.message || "something went wrong"})
})

module.exports = router;
