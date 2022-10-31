import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { Param } from '@nestjs/common/decorators';

import { CreatePriceDTO } from './dto/create-price.dto';
import { PriceService } from './price.service';

@Controller('price')
export class PriceController {
  constructor(private priceService: PriceService) {}

  @Post('/add')
  async createPrice(@Body() createPriceDTO: CreatePriceDTO, @Res() res) {
    const price = await this.priceService.addPrice(createPriceDTO);
    return res.status(201).json({
      message: 'Price Successfully Created',
      price,
    });
  }

  @Post('/addMany')
  async createManyPrice(
    @Res() res,
    @Body() createPriceDTO: Array<CreatePriceDTO>,
  ) {
    const price = await this.priceService.addManyPrice(createPriceDTO);
    return res.status(201).json({
      message: 'Price Successfully Created',
      price,
    });
  }

  @Get()
  async getPrices(@Res() res) {
    const prices = await this.priceService.getAllPrice();
    return res.status(200).json(prices);
  }

  @Get('/:name/:dateStart/:dateEnd')
  async getPriceByDateByToken(
    @Res() res,
    @Param('name') name,
    @Param('dateStart') dateStart,
    @Param('dateEnd') dateEnd,
  ) {
    const prices = await this.priceService.getPriceByDateByToken(
      name,
      dateStart,
      dateEnd,
    );
    return res.status(200).json(prices);
  }

  @Get('/:priceID')
  async getPrice(@Res() res, @Param('priceID') priceID) {
    const price = await this.priceService.getPrice(priceID);
    if (!price) throw new NotFoundException('Price does not exist!');

    return res.status(200).json(price);
  }

  @Delete('/delete/:priceID')
  async deletePrice(@Res() res, @Param('priceID') priceID) {
    const priceDeleted = await this.priceService.deletePrice(priceID);
    return res.status(200).json({
      message: 'Price Successfully Deleted',
      priceDeleted,
    });
  }

  @Delete('/delete')
  async deleteAllPrice(@Res() res) {
    const priceDeleted = await this.priceService.deleteAllPrice();
    return res.status(200).json({
      message: 'Price Successfully Deleted',
      priceDeleted,
    });
  }

  @Put('/update/:priceID')
  async updatePrice(
    @Res() res,
    @Param('priceID') priceID,
    @Body() createPriceDTO: CreatePriceDTO,
  ) {
    const priceUpdated = await this.priceService.updatePrice(
      priceID,
      createPriceDTO,
    );
    return res.status(200).json({
      message: 'Price Successfully Updated',
      priceUpdated,
    });
  }
}
