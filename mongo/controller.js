const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getAllCocktails } = require('./interface');

/* GET ALL COCKTAILS */
router.get('/getAllCocktails', async (req, res) => {

    const result = await getAllCocktails();
    res.status(200).send(result);

})


module.exports = router;
