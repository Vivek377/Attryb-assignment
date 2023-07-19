const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema({
    title: { required: true, type: String },
    image: { required: true, type: String },
    price: { required: true, type: String },
    colors: { required: true, type: Array },
    km: { required: true, type: Number },
    scratches: { required: true, type: Number },
    accidents: { required: true, type: Number },
    prevBuyers: { required: true, type: Number },
    originalPaint: { required: true, type: String },
    registrationPlace: { required: true, type: String }
})

const inventoryModel = mongoose.model("inventory", inventorySchema);

module.exports = inventoryModel
