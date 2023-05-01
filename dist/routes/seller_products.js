"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const seller_products_controller_1 = __importDefault(require("../controllers/seller_products.controller"));
const router = express_1.default.Router();
// router.get("/unpaid", getProfile, JobsController.getJobs);
//@POST
router.post("/addProduct", seller_products_controller_1.default.addSellerProduct);
//@GET
router.get('/allProducts', seller_products_controller_1.default.getAllProducts);
router.get('/', seller_products_controller_1.default.getSellerProductsByAsin);
router.get('/:sellerName', seller_products_controller_1.default.getSellerProductsByName);
//@PUT
router.put('/', seller_products_controller_1.default.updateSellerProductsByAsin);
//@DELETE
router.delete('/', seller_products_controller_1.default.deleteSellerProductsByAsin);
exports.default = router;
//# sourceMappingURL=seller_products.js.map