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

//Update
exports.updateOne = async (collection, yargsObj) => {};

//Delete One Instance
exports.deleteItem = async (collection, yargsObj) => {
  if (yargsObj.title) {
    query = { title: [yargsObj.title] };
    deleteResult = await collection.deleteOne(query);
    if (deleteResult.deletedCount) {
      console.log(`${deletedCount} items deleted.`);
    } else {
      console.log("No files deleted");
    }
  } else if (yargsObj.actor) {
    query = { actor: yargsObj.actor };
    console.log(query);
    deleteResult = await collection.deleteOne(query);
    if (deleteResult.deletedCount) {
      console.log(`${deletedCount} items deleted.`);
    } else {
      console.log("No files deleted");
    }
  } else if (yargsObj.id) {
    query = { id: yargsObj.id };
    deleteResult = await collection.deleteOne(query);
    if (deleteResult.deletedCount) {
      console.log(`${deletedCount} items deleted.`);
    } else {
      console.log("No files deleted");
    }
  } else {
    console.log("No files found with that value.");
  }
};

//Delete All Instances
exports.deleteAll = async (collection, yargsObj) => {
  if (yargsObj.title) {
    query = { title: [yargsObj.title] };
    deleteResult = await collection.deleteMany(query);
    if (deleteResult.deletedCount) {
      console.log(`${deletedCount} items deleted.`);
    } else {
      console.log("No files deleted");
    }
  } else if (yargsObj.actor) {
    query = { actor: [yargsObj.actor] };
    deleteResult = await collection.deleteMany(query);
    if (deleteResult.deletedCount) {
      console.log(`${deletedCount} items deleted.`);
    } else {
      console.log("No files deleted");
    }
  } else if (yargsObj.id) {
    query = { id: yargsObj.id };
    deleteResult = await collection.deleteMany(query);
    if (deleteResult.deletedCount) {
      console.log(`${deletedCount} items deleted.`);
    } else {
      console.log("No files deleted");
    }
  } else {
    console.log("No files found with that value.");
  }
};

// switch (yargsObj) {
//     case (yargsObj.title).length != 0:
//
//       }
//       break;
//     case yargsObj.actor:
//       query = yargsObj.actor;
//       deleteResult = await collection.deleteMany(query).toArray();
//       console.log(deleteResult);
//       break;
//     default:
//       console.log("Your switch doesn't work");
//       break;
//   }
