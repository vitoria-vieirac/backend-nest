/* eslint-disable prettier/prettier */
import { CreateHarvestDto } from './create-harvest.dto';

export interface UpdateHarvestDto extends Partial<CreateHarvestDto> {
  id: number;
}
