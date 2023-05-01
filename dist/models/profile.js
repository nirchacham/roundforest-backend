"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const sequelize_1 = __importDefault(require("sequelize"));
const profileType_enum_1 = require("../enums/profileType.enum");
const sequelize = new sequelize_1.default.Sequelize({
    dialect: "sqlite",
    storage: "./database.sqlite3",
});
class Profile extends sequelize_1.default.Model {
}
exports.Profile = Profile;
Profile.init({
    firstName: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    profession: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    },
    balance: {
        type: sequelize_1.default.DECIMAL(12, 2),
        validate: {
            min: 0,
        },
    },
    type: {
        type: sequelize_1.default.ENUM(profileType_enum_1.ProfileTypes.CLIENT, profileType_enum_1.ProfileTypes.CONTRACTOR),
    },
}, {
    sequelize,
    modelName: "Profile",
});
//# sourceMappingURL=profile.js.map