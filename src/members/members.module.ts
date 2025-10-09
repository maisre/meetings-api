import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { memberProviders } from './member.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MemberController],
  providers: [MemberService, ...memberProviders],
  exports: [MemberService],
  imports: [DatabaseModule],
})
export class MembersModule {}
