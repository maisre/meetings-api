import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userProviders } from './user.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  providers: [UsersService, ...userProviders],
  exports: [UsersService],
  imports: [DatabaseModule],
})
export class UsersModule {}
