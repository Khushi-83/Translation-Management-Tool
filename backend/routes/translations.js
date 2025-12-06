const express = require('express');
const router = express.Router();
const Translation = require('../models/Translation');

// Create
router.post('/', async (req, res) => {
  try {
    const { key, en, others } = req.body;
    const t = new Translation({ key, en, others });
    await t.save();
    res.status(201).json(t);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// Read (list)
router.get('/', async (req, res) => {
  try {
    const q = req.query.q;
    const filter = q ? { $or: [
      { key: { $regex: q, $options: 'i' } },
      { en: { $regex: q, $options: 'i' } },
    ] } : {};
    const items = await Translation.find(filter).sort({ createdAt: -1 }).limit(200);
    res.json(items);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Read single
router.get('/:id', async (req, res) => {
  try {
    const t = await Translation.findById(req.params.id);
    if(!t) return res.status(404).json({ error: 'not found' });
    res.json(t);
  } catch (err) { res.status(500).json({ error: err.message }); }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Translation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) { res.status(400).json({ error: err.message }); }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Translation.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  } catch (err) { res.status(500).json({ error: err.message }); }
});

module.exports = router;
