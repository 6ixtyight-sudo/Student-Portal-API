import express from "express";
// const express = require("express"); 

const router = express.Router();

import productController from "../Controllers/productController.js";

router.post("/upload/:studentId", productController.upLoadProduct);
router.get("/getall", productController.getAllProducts);
router.get("/getone/:id", productController.getOneProduct); 
router.delete("/delete/:id", productController.deleteProduct);
export default router;