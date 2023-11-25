import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeatsModule } from './beats/beats.module';

@Module({
  imports: [BeatsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
