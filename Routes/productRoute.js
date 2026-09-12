const express = require("express"); 

const router = express.Router();

const { uploadProduct, getAllProducts, getOneProduct } = require("../Controllers/productController");

router.post("/products", uploadProduct);
router.get("/products", getAllProducts);
router.get("/products/:id", getOneProduct); 