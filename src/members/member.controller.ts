import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { Member } from './interfaces/member.interface';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { ParseObjectIdPipe } from '../meeting/pipes/parse-object-id.pipe';
import { JwtAuthGuard } from '../auth/jwt.strategy';

@Controller('members')
@UseGuards(JwtAuthGuard)
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createMemberDto: CreateMemberDto): Promise<Member> {
    return this.memberService.create(createMemberDto);
  }

  @Get()
  async findAll(@Query('unit') unit?: string): Promise<Member[]> {
    if (unit) {
      return this.memberService.findByUnit(unit);
    }
    return this.memberService.findAll();
  }

  @Patch('test')
  async patchTest(@Body() data: any): Promise<any> {
    console.log('PATCH test method called with data:', data);
    return { message: 'PATCH test successful', data };
  }

  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Member> {
    return this.memberService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    return this.memberService.update(id, updateMemberDto);
  }

  @Patch(':id')
  async patch(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateMemberDto: UpdateMemberDto,
  ): Promise<Member> {
    console.log('PATCH method called with id:', id, 'data:', updateMemberDto);
    return this.memberService.update(id, updateMemberDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseObjectIdPipe) id: string): Promise<void> {
    return this.memberService.remove(id);
  }
}
