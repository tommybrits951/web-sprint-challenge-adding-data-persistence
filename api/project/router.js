const router = require('express').Router();
const Projects = require('./model');

router.get('/', async (req, res, next) => {
    try {
        let projects = await Projects.getAll();
        projects.map(project => {
        return project.project_completed === 0 ? project.project_completed = false : project.project_completed = true
        })
        res.status(200).json(projects);
    } catch (err) {
        next(err)
    }
    
})

router.get('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        let project = await Projects.getById(id)
        project.project_completed === 0 ? project.project_completed = false : project.project_completed = true
        res.status(200).json(project)
    } catch (err) {
        next(err);
    }
})

router.post('/', async (req, res, next) => {
    try {
        let proj = await Projects.insert(req.body) 
        proj.project_completed === 0 ? proj.project_completed = false : proj.project_completed = true
        
        res.status(201).json(proj)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => {//eslint-disable-line
    res.status(404).json({message:  'not found'})
})

module.exports= router;