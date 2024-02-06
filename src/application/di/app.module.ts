import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// import { AppController } from '../api/controller/app.controller';
// import { AppService } from '../../core/service/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category.module';
import { InfrastructureModule } from './infrastructure.module';
import { APP_FILTER } from '@nestjs/core';
import { ValidationExceptionFilter } from '@application/api/exception/validation-exception-interceptor';
import { TypeOrmCategory } from '@infrastructure/adapter/persistence/typeorm/entity/category/typeorm-category.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'FinanceiroDB',
      username: 'asv70',
      password: '1234567',
      entities: [TypeOrmCategory],
      autoLoadEntities: true,
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([TypeOrmCategory])
    InfrastructureModule,
    CategoryModule,
  ],

  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ValidationExceptionFilter,
    },
  ],
  exports: []
})
export class AppModule {}
