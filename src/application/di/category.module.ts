import { Module } from "@nestjs/common";
import { CategoryController } from "@application/api/controller/category.controller";
import { InfrastructureModule } from "./infrastructure.module";
import { CreateCategoryService } from "@core/service/category/usecase/create.category.service";
import { GetListCategoryService } from "@core/service/category/usecase/get.list.category.service";

@Module({
  imports: [
    InfrastructureModule
  ],
  controllers: [CategoryController],
  providers: [
    CreateCategoryService,
    GetListCategoryService
  ],
  exports: []
})
export class CategoryModule {}