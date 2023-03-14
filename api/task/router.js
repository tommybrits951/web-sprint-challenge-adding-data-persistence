const router = require('express').Router()
const Task = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const task = await Task.getAll()
        res.status(200).json(task)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const task = await Task.getById(id)
        if (!task) {
            res.status(404).json({message: 'task not found'})
        } else {
            res.status(200).json(task)
        }
    } catch (err) {
        next({status})
    }
})


module.exports = router;
