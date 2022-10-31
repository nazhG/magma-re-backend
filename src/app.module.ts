import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriceModule } from './price/price.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PriceModule,
    MongooseModule.forRoot(
      'mongodb+srv://nazhg:2J884UhVYCMUwwdY@cluster0.lalsfyz.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
