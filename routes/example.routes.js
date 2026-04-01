const express = require('express');
const router = express.Router();

// Hardcoded data — pretend this is your database for now
let fruits = [
  { id: 1, name: 'Mango',      color: 'yellow' },
  { id: 2, name: 'Pineapple',  color: 'brown'  },
  { id: 3, name: 'Banana',     color: 'yellow' },
];

// GET /fruits — return all
router.get('/', (req, res) => {
  res.json(fruits);
});

// GET /fruits/:id — return one
router.get('/:id', (req, res) => {
  const fruit = fruits.find(f => f.id === parseInt(req.params.id));

  if (!fruit) {
    return res.status(404).json({ message: 'Fruit not found' });
  }

  res.json(fruit);
})

// POST /fruits — add a new one
router.post('/', (req, res) => {
  const newFruit = {
    id:    fruits.length + 1,
    name:  req.body.name,
    color: req.body.color,
  };

  fruits.push(newFruit);
  res.status(201).json(newFruit);
});

// PUT /fruits/:id — update one
router.put('/:id', (req, res) => {
  const fruit = fruits.find(f => f.id === parseInt(req.params.id));

  if (!fruit) {
    return res.status(404).json({ message: 'Fruit not found' });
  }

  fruit.name  = req.body.name  || fruit.name;
  fruit.color = req.body.color || fruit.color;

  res.json(fruit);
});

// DELETE /fruits/:id — remove one
router.delete('/:id', (req, res) => {
  const index = fruits.findIndex(f => f.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: 'Fruit not found' });
  }

  fruits.splice(index, 1);
  res.json({ message: 'Fruit deleted successfully' });
});

module.exports = router;