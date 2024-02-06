import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryModel } from '@application/api/controller/documentation/create-category.model';
import { CreateCategoryService } from '@core/service/category/usecase/create.category.service';
import { GetListCategoryService } from '@core/service/category/usecase/get.list.category.service';
import { CategoryReponse } from './documentation/category.reponse';
import { CategoryListResponse } from './documentation/category-list.response';
import { CategoryUseCaseDto } from '@core/domain/category/usecase/dto/category-usecase.dto';

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly createCategoryService: CreateCategoryService,
    private readonly getListCategoryService: GetListCategoryService
  ) {}

  @Get()
  async listAll(): Promise<CategoryUseCaseDto[]> {
    return await this.getListCategoryService.execute();
  }

  @Post()
  async create(@Body() category: CreateCategoryModel): Promise<CategoryUseCaseDto> {
    return await this.createCategoryService.execute(category);
  }

}
