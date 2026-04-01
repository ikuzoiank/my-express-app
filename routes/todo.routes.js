const express = require('express');
const router = express.Router();
const { getTodos, createTodo, deleteTodo, updateTodo } = require('../controllers/todo.controller');

router.get('/', getTodos);      //This will be /api/todos
router.post('/', createTodo);   //This will be /api/todos
router.delete('/:id', deleteTodo); // The :id is a placeholder for the actual ID
router.patch('/:id', updateTodo);

module.exports = router;