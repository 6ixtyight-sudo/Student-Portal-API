// import express from "express";
// import { createStudent } from "../Controllers/studentController.js";

// const router = express.Router();

// router.post("/", createStudent);

// export default router;

import express from "express";

import {
    createStudent,
    getStudent,
    updateStudent,
    deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);

router.get("/:id", getStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;