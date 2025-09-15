import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Price: {
        type: Number,
        required: true
    },
    Quantity: {
        type: Number,
        required: true
    }
})

const Medicine = mongoose.model("Medicine", medicineSchema);

const pharmacySchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true
    },
    Stock: [{type: mongoose.Schema.Types.ObjectId, ref: "Medicine" }]
});

const Pharmacy = mongoose.model("Pharmacy", pharmacySchema);
export default Pharmacy;