// import express from "express";
// import { createStudent } from "../Controllers/studentController.js";

// const router = express.Router();

// router.post("/", createStudent);

// export default router;

import express from "express";

import {
    createStudent,
    getStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/", createStudent);

router.get("/:id", getStudent);

export default router;