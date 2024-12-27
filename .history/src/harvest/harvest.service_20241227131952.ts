/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateHarvestDto } from './dto/create-harvest.dto';
import { UpdateHarvestDto } from './dto/update-harvest.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class HarvestService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createHarvestDto: CreateHarvestDto) {
    return this.prismaService.harvest.create({
      data: createHarvestDto,
    });
  }

  findAll() {
    return this.prismaService.harvest.findMany();
  }

  findOne(id: number) {
    return this.prismaService.harvest.findUnique({
      where: { id },
    });
  }

  update(id: number, updateHarvestDto: UpdateHarvestDto) {
    return this.prismaService.harvest.update({
      where: { id },
      data: updateHarvestDto,
    });
  }

  remove(id: number) {
    return this.prismaService.harvest.delete({
      where: { id },
    });
  }
}
