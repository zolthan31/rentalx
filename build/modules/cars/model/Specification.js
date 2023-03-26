"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specification = void 0;
const { v4: uuidV4 } = require("uuid");
class Specification {
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
exports.Specification = Specification;
