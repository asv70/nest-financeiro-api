import { TransactionTypes } from '@core/common/enums/transaction-types';
import { Expose, plainToClass } from 'class-transformer';
import { Category } from '../../entity/category.entity';


export class CategoryUseCaseDto {

  @Expose()
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public transaction: TransactionTypes;

  public createdAt: number;

  public editedAt: number;

  public removedAt: number;

  public static transformFromCategory(category: Category): CategoryUseCaseDto {
    const categoryDto: CategoryUseCaseDto = plainToClass(CategoryUseCaseDto, category);

    categoryDto.createdAt = category.getCreatedAt().getTime();
    categoryDto.editedAt = category.getEditedAt()?.getTime() || null;
    categoryDto.removedAt = category.getRemovedAt()?.getTime() || null;

    return categoryDto;
  }

  public static transformListFromCategories(categories: Category[]): CategoryUseCaseDto[] {
    return categories.map(category => this.transformFromCategory(category));
  }
}