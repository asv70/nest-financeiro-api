import { ApiProperty } from "@nestjs/swagger";
import { TransactionTypes } from '@core/common/enums/transaction-types';

export class CreateCategoryModel {

  @ApiProperty({type: 'string', required: true})
  public name: string;

  @ApiProperty({
    enum: TransactionTypes,
    enumName: 'TransactionTypes',
    example: TransactionTypes.EARNING,
    required: true
  })
  public transaction: TransactionTypes;

}