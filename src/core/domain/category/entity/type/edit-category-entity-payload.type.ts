import { TransactionTypes } from '@core/common/enums/transaction-types';

export type EditCategoryEntityPayload = {
  name?: string,
  transaction?: TransactionTypes
}