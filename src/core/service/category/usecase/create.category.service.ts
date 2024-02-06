import { Inject, Injectable } from '@nestjs/common';
import { Category } from '@core/domain/category/entity/category.entity';
import { CategoryRepositoryPort } from '@core/domain/category/port/persistence/category-repository.port';
import { CreateCategoryPort } from '@core/domain/category/port/usecase/create-category.port';
import { CategoryUseCaseDto } from '@core/domain/category/usecase/dto/category-usecase.dto';

@Injectable()
export class CreateCategoryService {

  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepositoryPort
  ) {}

  async execute(payload: CreateCategoryPort): Promise<CategoryUseCaseDto> {
    const category = await Category.new({
        name: payload.name,
        transaction: payload.transaction
      });
    
    await this.categoryRepository.add(category);

    const categoryDto: CategoryUseCaseDto = await CategoryUseCaseDto.transformFromCategory(category);

    return categoryDto;
  }

}
