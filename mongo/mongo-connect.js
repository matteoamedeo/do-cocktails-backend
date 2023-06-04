const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://matteoamedeo:matteoamedeo@maestronode.stnuxqh.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function main() {

    try {

        // Connect to the MongoDB cluster
        await client.connect();

        return client;

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

module.exports = { main, client };
