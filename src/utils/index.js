//Create
exports.addMovie = async (collection, yargsObj) => {
  await collection.insertOne(yargsObj);
};

//Read by key value
exports.readFilter = async (collection, yargsObj) => {
  if (yargsObj.title) {
    query = yargsObj.title;
    results = await collection.find({ title: query }).toArray();
    console.log(`Found documents filtered by ${yargsObj.title} =>`, results);
  } else if (yargsObj.actor) {
    query = yargsObj.actor;
    results = await collection.find({ actor: query }).toArray();
    console.log(`Found documents filtered by ${yargsObj.actor} =>`, results);
  }
};

//Read All
exports.readAll = async (collection) => {
  results = await collection.find({}).toArray();
  console.log("Found all documents =>", results);
};

//Update - Syntax would be node src/app.js --update --title/etc="old"  --newtitle/etc="new value"
exports.updateOne = async (collection, yargsObj) => {
  if (yargsObj.newtitle) {
    const updateResult = await collection.updateOne(
      { title: yargsObj.title },
      {
        $set: { title: yargsObj.newtitle },
      }
    );
    console.log("Updated documents =>", updateResult);
  } else if (yargsObj.newactor) {
    const updateResult = await collection.updateOne(
      { actor: yargsObj.actor },
      {
        $set: { title: yargsObj.newactor },
      }
    );
    console.log("Updated documents =>", updateResult);
  }
};

//Delete One Instance
exports.deleteItem = async (collection, yargsObj) => {
  if (yargsObj.title) {
    deleteResult = await collection.deleteOne({ title: yargsObj.title });
    console.log(`${deleteResult.deletedCount} item(s) deleted.`);
  } else if (yargsObj.actor) {
    deleteResult = await collection.deleteOne({ actor: yargsObj.actor });
    console.log(`${deleteResult.deletedCount} item(s) deleted.`);
  } else if (yargsObj.id) {
    deleteResult = await collection.deleteOne({ _id: yargsObj.id });
    console.log(`${deleteResult.deletedCount} item(s) deleted.`);
  } else {
    console.log("No files found with that value.");
  }
};

//Delete All Instances
exports.deleteAll = async (collection, yargsObj) => {
  if (yargsObj.title) {
    deleteResult = await collection.deleteMany({ title: yargsObj.title });
    console.log(`${deleteResult.deletedCount} item(s) deleted.`);
  } else if (yargsObj.actor) {
    deleteResult = await collection.deleteMany({ actor: yargsObj.actor });
    console.log(`${deleteResult.deletedCount} item(s) deleted.`);
  } else if (yargsObj.id) {
    deleteResult = await collection.deleteMany({ _id: yargsObj.id });
    console.log(`${deleteResult.deletedCount} item(s) deleted.`);
  } else {
    console.log("No files found with that value.");
  }
};
