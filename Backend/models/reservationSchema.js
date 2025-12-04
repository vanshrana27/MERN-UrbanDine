import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength:[3, "First name must be at least 3 characters long!"],
        maxLength:[30, "First name must be at most 30 characters long!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength:[3, "Last name must be at least 3 characters long!"],
        maxLength:[30,"Last name must be at most 30 characters long!"],
    },
    email:{
        type: String,
        required: true,
        validator:[validator.isEmail,"please enter a valid email address!"],
    },
    phone: {
        type: String,
        required: true,
        minLength:[10, "Phone number must be at least 10 characters long!"],
        maxLength:[10,"Phone number must be at most 10 characters long!"],
    },
    time:{
        type: String,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
