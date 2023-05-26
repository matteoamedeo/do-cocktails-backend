const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://matteoamedeo:matteoamedeo@maestronode.stnuxqh.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function main() {

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        // await listDatabases(client);

        // await findOneListingByName(client, 'Titolo articolo 1');
        // await getCliente('mariorossi@gmail.com');

        return client;

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

/* GET CLIENTE */
// async function getCliente(email) {
//     const result = await client.db().collection("clienti").findOne({ email: email });

//     if (result) {
//         console.log(`Found a contact with the email '${email}':`);
//         console.log(result);
//     } else {
//         console.log(`No contacts found with the email '${email}'`);
//     }
// }

// async function listDatabases(client) {
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// async function findOneListingByName(client, nameOfListing) {
//     const result = await client.db().collection("articoli").findOne({ titolo: nameOfListing });

//     if (result) {
//         console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
//         console.log(result);
//     } else {
//         console.log(`No listings found with the name '${nameOfListing}'`);
//     }
// }

main().catch(console.error);

module.exports = { main, client };
