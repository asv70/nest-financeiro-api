import { TransactionTypes } from '@core/common/enums/transaction-types';

export interface CreateCategoryPort {
  name: string;
  transaction: TransactionTypes;
}