const router = require('express').Router();
const Projects = require('./model');

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getAll();
        res.status(200).json(projects);
    } catch (err) {
        next(err)
    }
    
})

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        const project = await Projects.getById(id)
        res.status(200).json(project)
    } catch (err) {
        next(err);
    }
})

module.exports= router;