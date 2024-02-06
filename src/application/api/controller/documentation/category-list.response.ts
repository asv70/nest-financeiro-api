import { ApiProperty } from "@nestjs/swagger";
import { HttpRestApiResponse } from "./common/HttpRestApiResponse";
import { CategoryModel } from "./category.model";

export class CategoryListResponse extends HttpRestApiResponse {
  @ApiProperty({type: CategoryModel, isArray: true})
  public data: CategoryModel[];
}
