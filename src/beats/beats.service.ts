import { Injectable } from '@nestjs/common';
import { CreateBeatDto } from './dto/create-beat.dto';
import { UpdateBeatDto } from './dto/update-beat.dto';
import { PrismaService } from '../prisma.service';
import { User, Beat, Prisma } from '@prisma/client';

@Injectable()
export class BeatsService {
  constructor(private prisma: PrismaService) {}

  create(createBeatDto: CreateBeatDto) {
    return 'created';
  }

  findAll() {
    return this.prisma.beat.findMany({
      select: {
        id: true,
        userId: true,
        title: true,
        price: true
      }
    });

  }

  findOne(id: number) {
    return this.prisma.beat.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        userId: true,
        title: true,
        price: true,
        audio: true
      }
    });
  }

  update(id: number, updateBeatDto: UpdateBeatDto) {
    return `This action updates a #${id} beat`;
  }

  remove(id: number) {
    return `This action removes a #${id} beat`;
  }
}
