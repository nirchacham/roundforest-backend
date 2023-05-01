"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = __importStar(require("sequelize"));
const response_1 = __importDefault(require("../responses/response"));
const db_handler_1 = __importDefault(require("./db.handler"));
const Op = Sequelize.Op;
class SellerProductsHandler {
    static getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerProducts = yield db_handler_1.default.getAllProducts();
            return sellerProducts.length ? new response_1.default(200, sellerProducts) : new response_1.default(404, 'No products were not found');
        });
    }
    static getSellerProductsByAsin(asin, locale) {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerProducts = yield db_handler_1.default.getSellerProductsByAsinAndLocale(asin, locale);
            return sellerProducts.length ? new response_1.default(200, sellerProducts) : new response_1.default(404, 'Seller products were not found');
        });
    }
    static getSellerProductsByName(sellerName) {
        return __awaiter(this, void 0, void 0, function* () {
            const sellerProducts = yield db_handler_1.default.getSellerProductsByName(sellerName);
            console.log(sellerProducts);
            return sellerProducts.length ? new response_1.default(200, sellerProducts) : new response_1.default(404, `${sellerName}'s products were not found`);
        });
    }
    static updateSellerProductsByAsin(asin, locale, product_name, product_link, price) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield db_handler_1.default.updateSellerProductsByAsinAndLocale(asin, locale, product_name, product_link, price);
            return updatedProduct ? new response_1.default(200, updatedProduct) : new response_1.default(404, 'Seller products were not found');
        });
    }
    static deleteSellerProductsByAsin(asin, locale) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedProduct = yield db_handler_1.default.deleteSellerProductsByAsinAndLocale(asin, locale);
            return deletedProduct ? new response_1.default(200, 'Deleted succesfully') : new response_1.default(404, 'Cannot delete because the product was not found');
        });
    }
    static addSellerProduct(asin, locale, price, product_name, product_link, seller_name) {
        return __awaiter(this, void 0, void 0, function* () {
            const addedProduct = yield db_handler_1.default.addSellerProduct(asin, locale, price, product_name, product_link, seller_name);
            return addedProduct ? new response_1.default(200, addedProduct) : new response_1.default(404, 'Cannot add new product');
        });
    }
}
exports.default = SellerProductsHandler;
//# sourceMappingURL=seller_products.handler.js.map