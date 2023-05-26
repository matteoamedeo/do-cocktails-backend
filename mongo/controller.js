const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const { getAllCocktails } = require('./interface');

router.use(cors());
router.use(express.urlencoded({ extended: true }));
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());


/* GET ALL COCKTAILS */
router.get('/getAllCocktails', async (req, res) => {

    const result = await getAllCocktails();
    // res.header("Access-Control-Allow-Origin", "*");
    res.status(200).send(result);

})



module.exports = router;
