
const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://matteoamedeo:matteoamedeo@maestronode.stnuxqh.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

/* GET ALL COCKTAILS */
async function getAllCocktails() {

    try {
        await client.connect();

        const result = await client.db().collection(process.env.MONGODB_COLLECTION).find({}).toArray();

        if (result) {
            return result;
        } else {
            console.log(`No cocktails found`);
            return 'Cocktails not found';
        }

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }

}

module.exports = { getAllCocktails };


