const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const { addMovie } = require("./utils");

const app = async (yargsObj) => {
  try {
    const collection = await connection();
    if (yargsObj.add) {
      await addMovie(collection, {
        title: yargsObj.title,
        actor: yargsObj.actor,
      });
      console.log(`${yargsObj} added to the database.`);
    } else {
      console.log("Incorrect command.");
    }
  } catch (error) {
    console.log(error);
  }
  client.close();
};

app(yargs.argv);
