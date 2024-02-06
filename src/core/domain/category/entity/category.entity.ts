import { TransactionTypes } from '@core/common/enums/transaction-types';
import { IsDate, IsEnum, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { CreateCategoryEntityPayload } from './type/create-category-entity-payload.type';
import { v4 } from 'uuid';
import { Nullable } from '@core/common/type/common-types';
import { ClassValidator } from '@core/common/util/class-validator/class-validator';

export class Category {

  @IsUUID()
  private id: string;

  @IsString()
  @MinLength(3)
  private name: string;

  @IsEnum(TransactionTypes)
  private transaction: TransactionTypes;

  @IsDate()
  private readonly createdAt: Date;
  
  @IsOptional()
  @IsDate()
  private editedAt: Nullable<Date>;
  
  @IsOptional()
  @IsDate()
  private removedAt: Nullable<Date>;

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getTransaction(): string {
    return this.transaction;
  }
  
  public getCreatedAt(): Date {
    return this.createdAt;
  }
  
  public getEditedAt(): Nullable<Date> {
    return this.editedAt;
  }
  
  public getRemovedAt(): Nullable<Date> {
    return this.removedAt;
  }
  
  constructor(payload: CreateCategoryEntityPayload) {

    // Informado
    this.name         = payload.name.charAt(0).toUpperCase() + payload.name.slice(1).toLowerCase();
    this.transaction  = payload.transaction;

    // Calculado / Processado
    this.id           = payload.id || v4();
    this.createdAt    = payload.createdAt || new Date();
    this.editedAt     = payload.editedAt || null;
    this.removedAt    = payload.removedAt || null;

  }

  public async remove(): Promise<void> {
    this.removedAt = new Date();
    await this.validate();
  }

  public static async new(payload: CreateCategoryEntityPayload): Promise<Category> {
    const category: Category = new Category(payload);
    await category.validate();
    
    return category;
  }

  private async validate(): Promise<void> {
    await ClassValidator.validate(this, {
      code: 1001,
      message: 'Entity validation error.'
    });
  }

}