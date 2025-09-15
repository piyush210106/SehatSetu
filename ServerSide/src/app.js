import express from "express";
import cors from "cors";
import patientRouter from "./Routes/patient.routes.js";
import doctorRouter from "./Routes/doctor.routes.js";
import pharmacyModel from "./Models/pharmacy.model.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/login/patient", patientRouter);
app.use("/doctor", doctorRouter);
app.use("/pharmacy", pharmacyModel);


export default app;