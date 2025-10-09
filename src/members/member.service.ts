import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Member } from './interfaces/member.interface';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';

@Injectable()
export class MemberService {
  constructor(
    @Inject('MEMBER_MODEL') private readonly memberModel: Model<Member>,
  ) {}

  async create(createMemberDto: CreateMemberDto): Promise<Member> {
    const createdMember = new this.memberModel(createMemberDto);
    return createdMember.save();
  }

  async findAll(): Promise<Member[]> {
    return this.memberModel.find({}).exec();
  }

  async findOne(id: string): Promise<Member> {
    const member = await this.memberModel.findById(id).exec();
    if (!member) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }
    return member;
  }

  async findByUnit(unit: string): Promise<Member[]> {
    return this.memberModel.find({ unit }).exec();
  }

  async update(id: string, updateMemberDto: UpdateMemberDto): Promise<Member> {
    const updatedMember = await this.memberModel
      .findByIdAndUpdate(id, updateMemberDto, { new: true })
      .exec();
    if (!updatedMember) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }
    return updatedMember;
  }

  async remove(id: string): Promise<void> {
    const result = await this.memberModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Member with ID ${id} not found`);
    }
  }
}
