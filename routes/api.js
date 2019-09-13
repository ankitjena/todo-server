var express = require('express');
var router = express.Router();
const todoModel = require('../model/todo')

const arr = [
  {
    content: "new",
    done: false
  }
]

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const allTodos = await todoModel.find({})
    res.send(allTodos)
  } catch (error) {
    throw error
  }
  // res.send(arr)
});

router.post('/add', async (req, res, next) => {
  try {
    let todo = new todoModel(req.body)
    const newTodo = await todo.save()
    res.send(newTodo)
  } catch (err) {
    throw err
  }
  // arr.push(req.body)
  // res.send(arr)
})

router.put('/todo/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const updatedTodo = await todoModel.findByIdAndUpdate(id, req.body)
    res.send(updatedTodo)
  } catch (err) {
    throw err
  }
})

router.delete('/todo/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedTodo = await todoModel.findByIdAndRemove(id)
    res.send(deletedTodo)
  } catch (err) {
    throw err
  }
})



module.exports = router;
