const router = require('express').Router()
const Task = require('./model');

router.get('/', async (req, res, next) => {
    try {
        let tasks = await Task.getAll()
        tasks.map(task => {
            return task.task_completed === 0 ? task.task_completed = false : task.task_completed = true
        })
        res.status(200).json(tasks)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        let task = await Task.getById(id)
        if (!task) {
            res.status(404).json({message: 'task not found'})
        } else {
            task.task_completed === 0 ? task.task_completed = false : task.task_completed = true
            res.status(200).json(task)
        }
    } catch (err) {
        next(err)
    }
})

router.post ('/', async (req, res, next) => {
    try {
        const newTask = req.body
        if (!newTask.project_id) {
            res.status(400).json({message: 'need project_id'})
        } else {

            let task = await Task.insert(newTask)
            task.task_completed === 0 ? task.task_completed = false : task.task_completed = true
            res.status(201).json(task)
        }
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(500).json({message: 'Oops! Something went bad!'})
})
module.exports = router;
