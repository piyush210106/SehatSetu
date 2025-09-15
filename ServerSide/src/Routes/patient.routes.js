import {Router} from "express";
import { talkRancho } from "../controllers/rancho.controller.js";

const patientRouter = Router();

patientRouter.route("/appointments").post(talkRancho);
export default patientRouter;