import { TransactionTypes } from "@core/common/enums/transaction-types";
import { ApiProperty } from "@nestjs/swagger";


export class CategoryModel {

  @ApiProperty({type: 'string'})
  public id: string;

  @ApiProperty({type: 'string', required: true})
  public name: string;

  @ApiProperty({
    enum: TransactionTypes,
    enumName: 'TransactionTypes',
    example: TransactionTypes.EARNING,
    required: true
  })
  public transaction: TransactionTypes;

  @ApiProperty({type: 'number'})
  public createdAt: number;
  
  @ApiProperty({type: 'number', required: false})
  public editedAt: number;

  @ApiProperty({type: 'number', required: false})
  public removedAt: number;

}