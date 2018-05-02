const express = require("express");
const inventoryRouter = express.Router();
const InventoryModel = require("../models/inventory.js")
inventoryRouter.route("/")
    .get((req, res) => {
        InventoryModel.find(req.query, (err, foundInventory) => {
            if (err) return res.send(err);
            res.status(200).send(foundInventory)
        })
    })
    .post((req, res) => {
        console.log(req.body);
        
        const newInventory = new InventoryModel(req.body);
        newInventory.save((err, addedInventory) => {
            if (err) return res.status(200).send(err)
            res.status(201).send(addedInventory)
        })
    });
inventoryRouter.route("/:id")
    .get((req, res) => {
        InventoryModel.findOne({ _id: req.params.id }, (err, foundInventory) => {
            if (err) return res.send(err);
            if (!foundInventory) return res.status(404).send({ message: " not Found" })
            res.status(200).send(foundInventory)
        })
    })
    .delete((req, res) => {
        inventoryModel.findByIdAndRemove({ _id: req.params.id }, (err, deletedInventory) => {
            if (err) return res.send(err);
            if (!deletedInventory) return res.status(404).send({ message: "does not exist" })
            res.status(204).send()
        })
    })
    .put((req, res) => {
        InventoryModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, updatedInventory) => {
            if (err) return res.send(err)
            if (!updatedInventory) return res.status(404).send({ message: "not Found" })
            res.status(200).send(updatedInventory)
        })
    })
module.exports = inventoryRouter;