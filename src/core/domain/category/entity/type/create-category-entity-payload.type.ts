import { TransactionTypes } from '@core/common/enums/transaction-types';


export type CreateCategoryEntityPayload = {
  name: string,
  transaction: TransactionTypes,
  id?: string,
  createdAt?: Date,
  editedAt?: Date,
  removedAt?: Date,
}