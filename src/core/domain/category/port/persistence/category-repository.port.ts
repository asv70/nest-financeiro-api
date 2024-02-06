import { Category } from "../../entity/category.entity";

export interface CategoryRepositoryPort {

  // find(id: string): Promise<Category>;

  findAll(): Promise<Category[]>;

  add(category: Category): Promise<void>;

  // update(category: Category): Promise<Category>;

  // remove(category: Category): Promise<void>;

}