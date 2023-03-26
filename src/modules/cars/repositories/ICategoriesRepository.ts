import { Category } from "../model/Category";
import { ICreatedCategoryDTO } from "../dtos/ICreatedCategoryDTO"

interface ICategoriesRepository {
findByName(name: string): Category;
list(): Category[];
create({name, description}: ICreatedCategoryDTO): void; 
}

export { ICategoriesRepository, ICreatedCategoryDTO }