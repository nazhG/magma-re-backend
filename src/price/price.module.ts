import { Module } from '@nestjs/common';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PriceSchema } from './schema/price.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Price', schema: PriceSchema }]),
  ],
  controllers: [PriceController],
  providers: [PriceService],
})
export class PriceModule {}
