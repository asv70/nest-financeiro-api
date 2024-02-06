import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepositoryPort } from "@core/domain/category/port/persistence/category-repository.port";
import { Category } from "@core/domain/category/entity/category.entity";
import { TypeOrmCategory } from "../../entity/category/typeorm-category.entity";
import { TypeOrmCategoryTransformer } from "../../entity/category/transformer/typeorm-category.transformer";

@Injectable()
export class TypeOrmRepositoryCategoryAdapter implements CategoryRepositoryPort {

  constructor(
    @InjectRepository(TypeOrmCategory)
    private readonly categoryRepository: Repository<TypeOrmCategory>,
  ) {}

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    const categoriesOrm = TypeOrmCategoryTransformer.toDomainEntities(categories);
    return categoriesOrm;
  }

  async add(category: Category): Promise<void> {
    const categoryOrm = TypeOrmCategoryTransformer.toOrmEntity(category);
    await this.categoryRepository.save(categoryOrm);
  }

}