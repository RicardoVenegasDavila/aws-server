import { Router } from 'express'
import Task from '../models/Task'
const router = Router()

router.get('/', async (req, res) => {

    const tasks = await Task.find().lean()
    console.log(tasks)
  
    res.render('index',{ tasks: tasks});
});

router.post('/tasks/add', async (req, res) => {


    const task = Task(req.body)

    await task.save()

    res.redirect("/")
});


router.get('/about', (req, res) => {
    res.send('casitas');
});

export default router;