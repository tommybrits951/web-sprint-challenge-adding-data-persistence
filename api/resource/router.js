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


module.exports = router;
