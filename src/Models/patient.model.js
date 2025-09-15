import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    Password: {
        type: String,
        required: true
    },
    City: {
        type: String,
        required: true
    },

});

const Patient = mongoose.model("Patient", patientSchema);
export default Patient;