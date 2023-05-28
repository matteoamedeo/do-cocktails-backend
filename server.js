const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

require('dotenv').config();

const app = express();

// const corsOptions = {
//     origin: 'http://192.168.1.55:3000', // Replace with your app's URL
//     allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
// };

app.use(cors());

app.use(express.urlencoded({ extended: true }));

/* ROUTERS */
const cocktailsRouter = require('./mongo/controller'); /* MONGO */

/* COCKTAILS */
app.use('/api/cocktails', cocktailsRouter);

app.use('/', (req, res) => {
    res.send('index')
});




app.listen(PORT, () => console.log(`Server on ${PORT}`));

