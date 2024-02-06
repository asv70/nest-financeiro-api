import { Module, Provider } from "@nestjs/common";
import { TypeOrmCategory } from '@infrastructure/adapter/persistence/typeorm/entity/category/typeorm-category.entity';
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmRepositoryCategoryAdapter } from "@infrastructure/adapter/persistence/typeorm/repository/category/typeorm-repository-category.adapter";

const providerRepository: Provider[] = [
  {
    provide   : 'CategoryRepository',
    useClass  : TypeOrmRepositoryCategoryAdapter
  }
]; 

@Module({
  imports: [
    TypeOrmModule.forFeature([TypeOrmCategory])  
  ],
  controllers: [],
  providers: [
    ...providerRepository
  ],
  exports: [
    ...providerRepository
  ]
})
export class InfrastructureModule {}