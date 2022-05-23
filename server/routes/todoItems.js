const router = require("express").Router();

const todoItemsModel = require("../models/todoItems");

router.post("/api/item", async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      item: req.body.item,
    });
    const saveItem = await newItem.save();
    res.status(200).json("Item Added Successfully.");
  } catch (err) {
    res.json(err);
  }
});

router.get("/api/items", async (req, res) => {
  try {
    const allTodoItems = await todoItemsModel.find({});
    res.status(200).json(allTodoItems);
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/item/:id", async (req, res) => {
  try {
    const updateItem = todoItemsModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Item Updated");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
