"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seller_products_1 = __importDefault(require("./routes/seller_products"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const model_1 = __importDefault(require("./models/model"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.set("sequelize", model_1.default.sequelize);
app.set("models", model_1.default.sequelize.models);
app.use("/sellerProducts", seller_products_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map