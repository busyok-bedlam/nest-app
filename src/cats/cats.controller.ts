import { Controller, Get, Post, Body, UsePipes, ForbiddenException, Param, Query, UseGuards } from '@nestjs/common';
import { CatsGuard } from './cats.guard';

import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@UseGuards(CatsGuard)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    console.log(createCatDto);
    this.catsService.create(createCatDto);
  }

	@Get()
	async find() {
	
    return this.catsService.findAll();
	}
  @Get('/:id')
  async findAll(@Query() queryData, @Param() paramData ): Promise<Cat[]> {
    console.log("PARAMDATA",paramData);
    console.log("QUERYDATA",queryData)

    return this.catsService.findAll();
  }
  @Get('/xxx')
   xxx(): string {
    return 'string';
  }
}
