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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateClient = void 0;
const profile_1 = require("../models/profile");
const profileType_enum_1 = require("../enums/profileType.enum");
const validateClient = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const client = yield profile_1.Profile.findOne({
        where: { id: userId, type: profileType_enum_1.ProfileTypes.CLIENT },
    });
    if (!client)
        res.status(400).send("Client was not found!");
    next();
});
exports.validateClient = validateClient;
//# sourceMappingURL=validateClient.js.map