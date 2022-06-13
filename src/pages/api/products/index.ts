import Kits from '../../../../models/Kits';
import Training from '../../../../models/Training';
import Lifestyle from '../../../../models/Lifestyle';
import Accesories from '../../../../models/Accessories';
import { dbConnect } from '../../../../utils/database';
import NextCors from 'nextjs-cors';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ProductType } from 'types/main';

dbConnect();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { method } = req;
  const { sort, limit, order }: any = req.query;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method '${method}' Not Allowed` });
  }

  try {
    const kits: Array<ProductType> = await Kits.find()
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    const training: Array<ProductType> = await Training.find()
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    const lifestyle: Array<ProductType> = await Lifestyle.find()
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    const accesories: Array<ProductType> = await Accesories.find()
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });

    res.status(200).json({ kits, training, lifestyle, accesories });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
