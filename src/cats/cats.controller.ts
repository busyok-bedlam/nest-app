import { Controller, Get, Post, Body, UsePipes, Param, Query, UseGuards, HttpStatus, HttpException,UseFilters} from '@nestjs/common';
import { CatsGuard } from './cats.guard';
import { ForbiddenException } from '../common/exeption/forbidden.exception'
import { HttpExceptionFilter } from '../common/filters/http_exeption.filter';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
@UseFilters(new HttpExceptionFilter())
@UseGuards(CatsGuard)
export class CatsController {
	constructor(private readonly catsService: CatsService) {}

	@Post()
	async create(@Body() createCatDto: CreateCatDto) {
		console.log(createCatDto);
		this.catsService.create(createCatDto);
	}

	@Get()
	async find(): Promise<String> {
		return "FJDKGKDKGJD";
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
