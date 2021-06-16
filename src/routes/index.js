const express = require('express');
const router = express.Router();

const MyModel = require('../models/MyModel');

router.get('/', async (req, res) => {
    const model = await MyModel.find();
    res.render('index', { model });
});

router.post('/add', async (req, res) => {
    const model = new MyModel(req.body);
    await model.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await MyModel.remove({ _id: id});
    res.redirect('/');
});

module.exports = router;