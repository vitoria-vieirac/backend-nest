/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { HarvestService } from './harvest.service';
import { HarvestController } from './harvest.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [HarvestController],
  providers: [HarvestService],
  imports: [DbModule],
})
export class HarvestModule {}
