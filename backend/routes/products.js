import express from "express";
import product from "../model/productSchema.js";
const router = express.Router();

//add produt
router.post("/add", async (req, res) => {
  try {
    const { name, brand, price } = req.body;
    const newProduct = await product.create({
      name: name,
      brand: brand,
      price: price,
    });
    if (newProduct) {
      res.status(201).json({
        message: "product added successfully!",
        data: newProduct,
      });
    } else {
      res.status(400).json({
        message: "product not added!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong, please try again!",
    });
  }
});
//get all products
router.get("/get", async (req, res) => {
  try {
    const allProducts = await product.find({});
    if (allProducts) {
      return res.status(200).json({
        message: "All products!",
        data: allProducts,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "something went wrong, please try again!",
    });
  }
});

export default router;
