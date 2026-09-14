import productModel from "../Models/productModel.js";
import studentModel from "../Models/studentModel.js";

//const productModel = require('../Models/productModel');
//const studentModel = require('../Models/studentModel');

/**
 *  create : product
 * get all
 * get one
 * update : update product(stock)
 * delete : delete product
 */

// create 

const upLoadProduct = async (req, res) => {
    try {
        const getStudentID = await studentModel.findById(req.params.studentId);
        const { name, description, price, category, availability, image } = req.body;
        if (!getStudentID) {
            return res.status(404).json({ 
              message: "Student not found" 
            });
        }
        const product = await productModel.create({
            name,
            description,
            price,
            category,
            availability,
            image
        })
      getStudentID.productModel.push(product._id);
      await getStudentID.save();
      return res.status(201).json(
        {
          message: 'Product created successfully',
          product
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// get all products
const getAllProducts = async (req, res) => {
    try {
      const getAll = await productModel.find();
      return res.status(200).json({
        message : "All products fetched successfully",
        data: getAll
      })
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

  }

    
//Get one product    
const getOneProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const product = await product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      return res.status(200).json({
        message : "Product fetched successfully",
        data: product
      })
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
} 

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        res.status(200).json({
            message: "Product deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export default {
  upLoadProduct,
  getAllProducts,
  getOneProduct,
  deleteProduct
}