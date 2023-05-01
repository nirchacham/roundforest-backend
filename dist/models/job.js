"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Job = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const sequelize = new sequelize_1.default.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite3",
});
class Job extends sequelize_1.default.Model {
}
exports.Job = Job;
Job.init({
    description: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    price: {
        type: sequelize_1.default.DECIMAL(12, 2),
        allowNull: false,
    },
    paid: {
        type: sequelize_1.default.BOOLEAN,
        defaultValue: false,
    },
    paymentDate: {
        type: sequelize_1.default.DATE,
    },
    ContractId: {
        type: sequelize_1.default.NUMBER,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Job",
});
//# sourceMappingURL=job.js.map