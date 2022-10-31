import { Document } from 'mongoose';

export interface Price extends Document {
  readonly _id: string;
  readonly price: number;
  readonly token: string;
  readonly date: Date;
}
