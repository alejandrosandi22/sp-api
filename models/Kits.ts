import { Schema, model, models } from 'mongoose';

const kitsSchema = new Schema(
  {
    team: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    endpoint: {
      type: String,
      required: true,
    },
    season: {
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
    category: {
      type: String,
      required: true,
    },
    size: {
      type: [String],
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
    collection: 'kits',
  }
);

export default models.Kits || model('Kits', kitsSchema);
