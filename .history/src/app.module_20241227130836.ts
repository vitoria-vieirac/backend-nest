import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { HarvestModule } from './harvest/harvest.module';

@Module({
  imports: [DbModule, HarvestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
