"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const contractStatus_enum_1 = require("../enums/contractStatus.enum");
const job_1 = require("./job");
const profile_1 = require("./profile");
const sequelize = new sequelize_1.default.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite3",
});
class Contract extends sequelize_1.default.Model {
}
exports.Contract = Contract;
Contract.init({
    terms: {
        type: sequelize_1.default.TEXT,
        allowNull: false,
    },
    status: {
        type: sequelize_1.default.ENUM(contractStatus_enum_1.ContractStatus.NEW, contractStatus_enum_1.ContractStatus.IN_PROGRESS, contractStatus_enum_1.ContractStatus.TERMINATED),
    },
    ContractorId: {
        type: sequelize_1.default.INTEGER,
        // allowNull: false,
    },
    ClientId: {
        type: sequelize_1.default.INTEGER,
        // allowNull: false,
    },
}, {
    sequelize,
    modelName: "Contract",
});
Contract.hasMany(profile_1.Profile, { as: "Contractor", foreignKey: "ContractorId" });
profile_1.Profile.belongsTo(Contract, { as: "Contractor" });
Contract.hasMany(profile_1.Profile, { as: "Client", foreignKey: "ClientId" });
profile_1.Profile.belongsTo(Contract, { as: "Client" });
Contract.hasMany(job_1.Job);
job_1.Job.belongsTo(Contract);
//# sourceMappingURL=contract.js.map