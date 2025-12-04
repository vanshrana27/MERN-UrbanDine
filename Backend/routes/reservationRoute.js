import express from "express";
import { sendReservation } from "../controller/reservation.js"; // ✅ CORRECT



const router = express.Router();

router.post("/send", sendReservation);

export default router;
