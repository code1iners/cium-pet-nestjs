import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserService, UserResolver],
  imports: [DatabaseModule],
})
export class UserModule {}
