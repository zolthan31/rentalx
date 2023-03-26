"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoutes = void 0;
const express_1 = require("express");
const createCategory_1 = require("../modules/cars/useCases/createCategory");
const listCategories_1 = require("../modules/cars/useCases/listCategories");
//import {v4 as uuidV4} from "uuid";
const categoriesRoutes = (0, express_1.Router)();
exports.categoriesRoutes = categoriesRoutes;
categoriesRoutes.post("/", (request, response) => {
    return createCategory_1.createCategoryController.handle(request, response);
});
categoriesRoutes.get("/", (request, response) => {
    return listCategories_1.listCategoriesController.handle(request, response);
});
