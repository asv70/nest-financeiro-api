import { Category } from "@core/domain/category/entity/category.entity";
import { CategoryRepositoryPort } from "@core/domain/category/port/persistence/category-repository.port";
import { CategoryUseCaseDto } from "@core/domain/category/usecase/dto/category-usecase.dto";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
export class GetListCategoryService {

  constructor(
    @Inject('CategoryRepository')
    private readonly categoryRepository: CategoryRepositoryPort
  ) {}

  async execute(): Promise<CategoryUseCaseDto[]> {
    const categories = await this.categoryRepository.findAll();
    const categoriesDto: CategoryUseCaseDto[] = await CategoryUseCaseDto.transformListFromCategories(categories);
    
    return categoriesDto;
  }

}
