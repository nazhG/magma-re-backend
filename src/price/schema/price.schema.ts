import { Schema } from 'mongoose';

export const PriceSchema = new Schema({
  price: Number,
  name: String,
  date: Number,
});
