import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PriceModule } from './price/price.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PriceModule,
    MongooseModule.forRoot(
      'mongodb+srv://nazhg:<password>@cluster0.lalsfyz.mongodb.net',
      {
        user: 'nazhg',
        pass: '2J884UhVYCMUwwdY',
        dbName: 'cluster0',
        w: 'majority',
        retryWrites: true,
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
