"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryUseCase = void 0;
class CreateCategoryUseCase {
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
exports.CreateCategoryUseCase = CreateCategoryUseCase;
