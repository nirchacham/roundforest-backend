"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContractId = void 0;
const validateContractId = (req, res, next) => {
    const { id: contractId } = req.params;
    console.log(contractId);
    if (isNaN(+contractId))
        return res.status(401).send("Contract id is is not valid!");
    next();
};
exports.validateContractId = validateContractId;
//# sourceMappingURL=validateContractId.js.map