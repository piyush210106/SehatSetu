import {Router} from "express";
import { doctorLogin } from "../controllers/doctor.controller.js";

const doctorRouter = Router();

doctorRouter.route("/login").post(doctorLogin);
doctorRouter.route("/doctor").post(doctorLogin);
doctorRouter.route("/doctor").get(doctorLogin);

export default doctorRouter;