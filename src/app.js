const yargs = require("yargs");
const { client, connection } = require("./db/connection");
const {
  addMovie,
  readAll,
  readFilter,
  deleteItem,
  deleteAll,
} = require("./utils");

const app = async (yargsObj) => {
  try {
    const collection = await connection();
    if (yargsObj.add) {
      await addMovie(collection, {
        title: yargsObj.title,
        actor: yargsObj.actor,
      });
      console.log(`${yargsObj.title} added to the database.`);
    } else if (yargsObj.readall) {
      await readAll(collection);
    } else if (yargsObj.readone) {
      await readFilter(collection, {
        title: yargsObj.title,
        actor: yargsObj.actor,
      });
    } else if (yargsObj.deleteone) {
      await deleteItem(collection, yargsObj);
    } else if (yargsObj.deleteall) {
      await deleteAll(collection, yargsObj);
    } else {
      console.log("Incorrect command.");
    }
  } catch (error) {
    console.log(error);
  }
  client.close();
};

app(yargs.argv);
