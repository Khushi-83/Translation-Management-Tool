const mongoose = require('mongoose');

const TranslationSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  en: { type: String, required: true },
  others: { type: Map, of: String, default: {} }, // e.g. { "hi": "नमस्ते", "es": "hola" }
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Translation', TranslationSchema);
