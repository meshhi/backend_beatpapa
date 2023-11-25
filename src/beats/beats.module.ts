import { Module } from '@nestjs/common';
import { BeatsService } from './beats.service';
import { BeatsController } from './beats.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BeatsController],
  providers: [BeatsService, PrismaService],
})
export class BeatsModule {}
