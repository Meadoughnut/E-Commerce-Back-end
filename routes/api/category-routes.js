const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories with associated Products
router.get('/', async (req, res) => {
  try {
    const category = await Category.findAll({
      include: [Product]
    });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve categories', error: err.message });
  }
});

// GET a single category by its `id` value with associated Products
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, {
      include: [Product]
    });
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve category', error: err.message });
  }
});

// POST a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create category', error: err.message });
  }
});

// PUT to update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Category.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const updatedCategory = await Category.findByPk(req.params.id);
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update category', error: err.message });
  }
});

// DELETE a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Category not found' });
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete category', error: err.message });
  }
});

module.exports = router;
