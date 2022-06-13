import { Schema, model, models } from 'mongoose';

const accessoriesSchema = new Schema(
  {
    team: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    endpoint: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    sold: {
      type: Number,
      required: true,
    },
    rate: {
      type: [Number],
      required: true,
    },
    comments: {
      type: [{ body: String, author: String, rate: Number, date: Date }],
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: 'accessories',
  }
);

export default models.Accessories || model('Accessories', accessoriesSchema);
