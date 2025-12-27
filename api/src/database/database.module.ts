import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { getTypeOrmConfig } from '../config/typeorm-db.config';
import { getMongooseConfig } from '../config/mongoose-db.config';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        getTypeOrmConfig(configService),
      inject: [ConfigService],
    }),

    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) =>
        getMongooseConfig(configService),
      inject: [ConfigService],
    }),
  ],
  exports: [TypeOrmModule, MongooseModule],
})
export class DatabaseModule {}
