import { TransactionTypes } from '@core/common/enums/transaction-types';
import { Category } from '@core/domain/category/entity/category.entity';
import { TypeOrmCategory } from '@infrastructure/adapter/persistence/typeorm/entity/category/typeorm-category.entity';

export class TypeOrmCategoryTransformer {

  public static toOrmEntity(domainEntity: Category): TypeOrmCategory {
    const ormEntity: TypeOrmCategory = new TypeOrmCategory();

    ormEntity.id            = domainEntity.getId();
    ormEntity.name          = domainEntity.getName();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ormEntity.transaction   = domainEntity.getTransaction() as TransactionTypes;
    ormEntity.createdAt     = domainEntity.getCreatedAt();
    ormEntity.editedAt      = domainEntity.getEditedAt() as Date;
    ormEntity.removedAt     = domainEntity.getRemovedAt() as Date;

    return ormEntity;
  }

  public static toOrmEntities(domainEntities: Category[]): TypeOrmCategory[] {
    return domainEntities.map(domainEntity => this.toOrmEntity(domainEntity));
  }

  public static toDomainEntity(ormEntity: TypeOrmCategory): Category {
    const domainEntity: Category = new Category({
      id          : ormEntity.id,
      name        : ormEntity.name,
      transaction : ormEntity.transaction,
      createdAt   : ormEntity.createdAt,
      editedAt    : ormEntity.editedAt,
      removedAt   : ormEntity.removedAt
    });

    return domainEntity;
  }

  public static toDomainEntities(ormEntities: TypeOrmCategory[]): Category[] {
    return ormEntities.map(ormEntity => this.toDomainEntity(ormEntity));
  }

}