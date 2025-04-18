const dataController = (mongoClient) => {
  const getData = async (req, res) => {
    const { db, collection } = req.params;
    console.log("db", db);
    console.log("collection", collection);
    const database = mongoClient.db(db);
    if (!database) {
      return res
        .status(404)
        .send({ message: "Database not found", timestamp: Date.now() });
    }
    const collectionRef = database.collection(collection);
    if (!collectionRef) {
      return res
        .status(404)
        .send({ message: "Collection not found", timestamp: Date.now() });
    }
    const data = await collectionRef.find({}).toArray();
    console.log("data", data);
    res.send({ message: "OK", data, timestamp: Date.now() });
  };
  const getDataById = async (req, res) => {
    const { db, collection, id } = req.params;
    const database = mongoClient.db(db);
    if (!database) {
      return res
        .status(404)
        .send({ message: "Database not found", timestamp: Date.now() });
    }
    const collectionRef = database.collection(collection);
    if (!collectionRef) {
      return res
        .status(404)
        .send({ message: "Collection not found", timestamp: Date.now() });
    }
    const data = await collectionRef.findOne({ id: id });
    if (!data) {
      return res
        .status(404)
        .send({ message: "Data not found", timestamp: Date.now() });
    }
    res.send({ message: "OK", data, timestamp: Date.now() });
  };
  const setData = async (req, res) => {
    const { db, collection } = req.params;
    const database = mongoClient.db(db);
    if (!database) {
      return res
        .status(404)
        .send({ message: "Database not found", timestamp: Date.now() });
    }
    const collectionRef = database.collection(collection);
    if (!collectionRef) {
      return res
        .status(404)
        .send({ message: "Collection not found", timestamp: Date.now() });
    }
    const data = req.body.data;
    await collectionRef.insertOne(data);
    res.send({ message: "OK", data, timestamp: Date.now() });
  };
  return {
    getData,
    getDataById,
    setData,
  };
};

export default dataController;
