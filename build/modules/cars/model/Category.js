"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const { v4: uuidV4 } = require("uuid");
class Category {
    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}
exports.Category = Category;
