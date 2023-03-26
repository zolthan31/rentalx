"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSpecificationService = void 0;
class CreateSpecificationService {
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
exports.CreateSpecificationService = CreateSpecificationService;
