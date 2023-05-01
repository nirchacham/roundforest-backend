"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize = new sequelize_1.default.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite3",
});
class SellerProduct extends sequelize_1.default.Model {
}
SellerProduct.init({
    asin: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    locale: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    availability: {
        type: sequelize_1.default.BOOLEAN,
    },
    product_name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    seller_name: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    product_link: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.default.DECIMAL(12, 2),
        validate: {
            min: 0,
        },
    },
}, {
    sequelize,
    modelName: "SellerProduct",
});
exports.default = {
    sequelize,
    SellerProduct
};
//# sourceMappingURL=model.js.map