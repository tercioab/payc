import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateHistoricDto } from './dto/create-historic.dto';
import { HistoricService } from './historic.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { User } from '@prisma/client';

@Controller('historic')
export class HistoricController {
  constructor(private readonly historicService: HistoricService) {}

  @Post()
  create(@Body() createHistoricDto: CreateHistoricDto) {
    return this.historicService.create(createHistoricDto);
  }

  @Get()
  findAll(@CurrentUser() user: User) {
    return this.historicService.findAll(user.id);
  }
}
