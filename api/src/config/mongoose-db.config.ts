import { MongooseModuleOptions } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

export const getMongooseConfig = (
  configService: ConfigService,
): MongooseModuleOptions => ({
  uri: configService.get<string>('MONGODB_URI'),
});
