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
const model_1 = __importDefault(require("../models/model"));
class DbHandler {
    static getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.SellerProduct.findAll({});
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    static getSellerProductsByAsinAndLocale(asin, locale) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.SellerProduct.findAll({
                    where: {
                        asin: asin,
                        locale: locale
                    }
                });
            }
            catch (err) {
                console.log(err);
                //throw custom error
            }
        });
    }
    static getSellerProductsByName(sellerName) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.SellerProduct.findAll({
                    where: {
                        seller_name: sellerName,
                        availability: true,
                    }
                });
            }
            catch (err) {
                console.log(err);
                //throw custom error
            }
        });
    }
    static deleteSellerProductsByAsinAndLocale(asin, locale) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.SellerProduct.destroy({
                    where: {
                        asin: asin,
                        locale: locale
                    }
                });
            }
            catch (err) {
                console.log(err);
                //throw custom error
            }
        });
    }
    static updateSellerProductsByAsinAndLocale(asin, locale, product_name, product_link, price) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const productToUpdate = yield model_1.default.SellerProduct.findOne({
                    where: {
                        asin: asin,
                        locale: locale
                    }
                });
                if (productToUpdate) {
                    productToUpdate.update({
                        product_name: product_name !== null && product_name !== void 0 ? product_name : productToUpdate.product_name,
                        product_link: product_link !== null && product_link !== void 0 ? product_link : productToUpdate.product_link,
                        price: price !== null && price !== void 0 ? price : productToUpdate.price
                    });
                    return productToUpdate;
                }
                else
                    return null;
            }
            catch (err) {
                console.log(err);
                //throw custom error
            }
        });
    }
    static addSellerProduct(asin, locale, price, product_name, product_link, seller_name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield model_1.default.SellerProduct.create({
                    asin,
                    locale,
                    seller_name,
                    availability: true,
                    price,
                    product_name,
                    product_link
                });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
exports.default = DbHandler;
//# sourceMappingURL=db.handler.js.map