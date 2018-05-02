const mongoose = require("mongoose");
const { Schema } = mongoose;
const inventorySchema = new Schema({
    Item: String,
    model: {
        required: true,
        type: String
    },
   expiryDate: Date
})
const InventoryModel = mongoose.model("inventory", inventorySchema);
module.exports = InventoryModel