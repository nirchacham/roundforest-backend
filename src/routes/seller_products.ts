import express from "express";
import SellerProductsController from "../controllers/seller_products.controller";

const router = express.Router();

//@POST
router.post("/addProduct", SellerProductsController.addSellerProduct);

//@GET
router.get('/allProducts',SellerProductsController.getAllProducts)
router.get('/',SellerProductsController.getSellerProductsByAsin)
router.get('/:sellerName',SellerProductsController.getSellerProductsByName)

//@PUT
router.put('/',SellerProductsController.updateSellerProductsByAsin)

//@DELETE
router.delete('/',SellerProductsController.deleteSellerProductsByAsin)
export default router;
