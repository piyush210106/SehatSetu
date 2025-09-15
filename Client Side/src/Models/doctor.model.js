import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
    patientName: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    }
})

const Meeting = mongoose.model("Meeting", meetingSchema);

const doctorSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true
    },
    id: {
        type: String,
        required: true,
        trim: true
    },
    Speciality:{
        type: String,
        required: true,
        trim: true
    },
    Password: {
        type: String, 
        required: true,
        trim: true
    },
    Meetings: [{type: mongoose.Schema.Types.ObjectId, ref: "Meeting"}]
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;