import { TransactionTypes } from "@core/common/enums/transaction-types";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('category')
export class TypeOrmCategory {

  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({unique: true})
  public name: string;

  @Column()
  public transaction: TransactionTypes;

  @Column()
  public createdAt: Date;
  
  @Column({nullable: true})
  public editedAt: Date;
  
  @Column({nullable: true})
  public removedAt: Date;
  
}