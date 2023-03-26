"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationUseCase = void 0;
class CreateSpecificationUseCase {
    constructor(specificationRepository) {
        this.specificationRepository = specificationRepository;
    }
    execute({ name, description }) {
        const specificationAlredyExists = this.specificationRepository.findByName(name);
        if (specificationAlredyExists) {
            throw new Error("Specification Already exists!!");
        }
        this.specificationRepository.create({
            name,
            description,
        });
    }
}
exports.CreateSpecificationUseCase = CreateSpecificationUseCase;
