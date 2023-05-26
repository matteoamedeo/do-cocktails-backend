const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

/* ROUTERS */
const clientiRouter = require('./mongo/controller'); /* MONGO */

/* COCKTAILS */
app.use('/api/cocktails', clientiRouter);

app.use('/', (req, res) => {
    res.send('index')
});




app.listen(PORT, () => console.log(`Server on ${PORT}`));

