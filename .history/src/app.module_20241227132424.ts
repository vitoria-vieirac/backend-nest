/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { HarvestModule } from './harvest/harvest.module';

@Module({
  imports: [DbModule, HarvestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
