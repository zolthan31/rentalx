"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryService = void 0;
class CreateCategoryService {
    constructor(categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }
    execute({ description, name }) {
        const categoryAlreadyExist = this.categoriesRepository.findByName(name);
        if (categoryAlreadyExist) {
            throw new Error("Category Already exists!!");
        }
        this.categoriesRepository.create({ name, description });
    }
}
exports.CreateCategoryService = CreateCategoryService;
