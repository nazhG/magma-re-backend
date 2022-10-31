import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Price } from './interfaces/price.interface';
import { CreatePriceDTO } from './dto/create-price.dto';
@Injectable()
export class PriceService {
  constructor(
    @InjectModel('Price') private readonly priceModel: Model<Price>,
  ) {}
  // fetch all prices
  async getAllPrice(): Promise<Price[]> {
    const prices = await this.priceModel.find().exec();
    return prices;
  }
  // Get a prices between dates
  async getPriceByDateByToken(
    name: string,
    dateStart: number,
    dateEnd: number,
  ): Promise<any> {
    const prices = await this.priceModel
      .find({
        name: name,
        date: {
          $gte: dateStart,
          $lt: dateEnd,
        },
      })
      .exec();
    return prices;
  }
  // Get a single price
  async getPrice(priceID: string): Promise<Price> {
    const price = await this.priceModel.findById(priceID).exec();
    return price;
  }
  // post a single price
  async addManyPrice(prices: Array<CreatePriceDTO>) /*: Promise<Price>*/ {
    const price = await this.priceModel.insertMany(prices);
    console.log('price', price);
    // return price;
  }
  // post a single price
  async addPrice(createPriceDTO: CreatePriceDTO): Promise<Price> {
    const newPrice = await new this.priceModel(createPriceDTO);
    return newPrice.save();
  }
  // Edit price details
  async updatePrice(priceID, createPriceDTO: CreatePriceDTO): Promise<Price> {
    const updatedPrice = await this.priceModel.findByIdAndUpdate(
      priceID,
      createPriceDTO,
      { new: true },
    );
    return updatedPrice;
  }
  // Delete a price
  async deletePrice(priceID): Promise<any> {
    const deletedPrice = await this.priceModel.findByIdAndRemove(priceID);
    return deletedPrice;
  }
  // Delete a all price
  async deleteAllPrice(): Promise<any> {
    const deletedPrice = await this.priceModel.deleteMany({});
    return deletedPrice;
  }
}
