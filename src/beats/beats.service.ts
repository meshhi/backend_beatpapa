import { Injectable } from '@nestjs/common';
import { CreateBeatDto } from './dto/create-beat.dto';
import { UpdateBeatDto } from './dto/update-beat.dto';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class BeatsService {
  constructor(private prisma: PrismaService) {}

  create(createBeatDto: CreateBeatDto) {
    return 'created';
  }

  findAll() {
    return this.prisma.beat.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} beat`;
  }

  update(id: number, updateBeatDto: UpdateBeatDto) {
    return `This action updates a #${id} beat`;
  }

  remove(id: number) {
    return `This action removes a #${id} beat`;
  }
}
