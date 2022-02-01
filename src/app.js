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
      //add movie to MongoDB DB, needs collection and success message.
    } else {
      console.log("Incorrect command.");
    }
  } catch (error) {
    console.log(error);
  }
  client.close();
};

app(yargs.argv);
