import { ApiProperty } from "@nestjs/swagger";
import { HttpRestApiResponse } from "./common/HttpRestApiResponse";
import { CategoryModel } from "./category.model";

export class CategoryReponse extends HttpRestApiResponse {
  @ApiProperty({type: CategoryModel})
  public data: CategoryModel;
}
