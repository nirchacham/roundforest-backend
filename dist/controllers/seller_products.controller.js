"use strict";
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
const seller_products_handler_1 = __importDefault(require("../handlers/seller_products.handler"));
class SellerProductsController {
    static getAllProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield seller_products_handler_1.default.getAllProducts();
            res.status(result.status).send(result.message);
        });
    }
    static getSellerProductsByAsin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { asin, locale } = req.query;
            const result = yield seller_products_handler_1.default.getSellerProductsByAsin(asin.toString(), locale.toString());
            res.status(result.status).send(result.message);
        });
    }
    static getSellerProductsByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { sellerName } = req.params;
            const result = yield seller_products_handler_1.default.getSellerProductsByName(sellerName);
            res.status(result.status).send(result.message);
        });
    }
    static updateSellerProductsByAsin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { asin, locale } = req.query;
            const { product_name, product_link, price } = req.body;
            console.log(product_name);
            console.log(product_link);
            console.log(price);
            const result = yield seller_products_handler_1.default.updateSellerProductsByAsin(asin.toString(), locale.toString(), product_name, product_link, price);
            res.status(result.status).send(result.message);
        });
    }
    static deleteSellerProductsByAsin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { asin, locale } = req.query;
            const result = yield seller_products_handler_1.default.deleteSellerProductsByAsin(asin.toString(), locale.toString());
            res.status(result.status).send(result.message);
        });
    }
    static addSellerProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { asin, locale, price, product_name, product_link, seller_name } = req.body;
            console.log('Body: ', req.body);
            // if(!asin || !locale || !price || !product_name || !product_link || !seller_name) res.status(400).send(null)
            const result = yield seller_products_handler_1.default.addSellerProduct(asin, locale, price, product_name, product_link, seller_name);
            res.status(result.status).send(result.message);
        });
    }
}
exports.default = SellerProductsController;
//# sourceMappingURL=seller_products.controller.js.map