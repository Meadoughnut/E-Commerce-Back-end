const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags with associated Product data
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [Product]
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tags', error: err.message });
  }
});

// GET a single tag by its `id` with associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [Product]
    });
    
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tag', error: err.message });
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    res.status(400).json({ message: 'Failed to create tag', error: err.message });
  }
});

// PUT to update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const [updated] = await Tag.update(req.body, {
      where: { id: req.params.id }
    });
    
    if (!updated) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    
    const updatedTag = await Tag.findByPk(req.params.id, {
      include: [Product]
    });
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(400).json({ message: 'Failed to update tag', error: err.message });
  }
});

// DELETE a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({
      where: { id: req.params.id }
    });
    
    if (!deleted) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete tag', error: err.message });
  }
});

module.exports = router;
