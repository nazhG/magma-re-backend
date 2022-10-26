import { Controller, Get, Post, Put, Delete, Body, Res } from '@nestjs/common';

import { CreatePriceDto } from './dto/price.dto';
@Controller('price')
export class PriceController {
  @Get()
  findAll(): string {
    return 'This action returns all price';
  }

  @Post()
  createPost(@Res() res, @Body() createPriceDTO: CreatePriceDto) {
    return 'This action adds a new price';
  }

  @Put()
  update(): string {
    return 'This action updates a price';
  }

  @Delete()
  remove(): string {
    return 'This action removes a price';
  }
}
