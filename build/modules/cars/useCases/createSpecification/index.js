"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpecificationController = void 0;
const SpecificationRepository_1 = require("../../repositories/implementations/SpecificationRepository");
const CreateSpecificationController_1 = require("./CreateSpecificationController");
const CreateSpecificationUseCase_1 = require("./CreateSpecificationUseCase");
const specificationRepository = new SpecificationRepository_1.SpecificationRepository();
const createSpecificationUseCase = new CreateSpecificationUseCase_1.CreateSpecificationUseCase(specificationRepository);
const createSpecificationController = new CreateSpecificationController_1.CreateSpecificationController(createSpecificationUseCase);
exports.createSpecificationController = createSpecificationController;