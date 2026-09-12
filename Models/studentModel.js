import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    registrationNumber: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    
    course:{
        type: String,
        required: true
    },
    
    products:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }]
},{timestamps: true});

const Student = mongoose.model("Student", studentSchema);

export default Student;