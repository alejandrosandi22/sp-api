import Kits from '../../../../../models/Kits';
import Training from '../../../../../models/Training';
import Lifestyle from '../../../../../models/Lifestyle';
import Accessories from '../../../../../models/Accessories';
import { dbConnect } from '../../../../../utils/database';
import { NextApiRequest, NextApiResponse } from 'next';
import NextCors from 'nextjs-cors';
import { ProductType } from 'types/main';

dbConnect();

export default async function kitsApiRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionsSuccessStatus: 200,
  });

  const { method } = req;
  const { sort, limit, order, endpoint }: any = req.query;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method '${method}' Not Allowed` });
  }

  try {
    const kits: ProductType[] | null = await Kits.find({ endpoint })
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    const training: ProductType[] | null = await Training.find({ endpoint })
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    const lifestyle: ProductType[] | null = await Lifestyle.find({ endpoint })
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    const accessories: ProductType[] | null = await Accessories.find({
      endpoint,
    })
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });

    res.status(200).json({ kits, training, lifestyle, accessories });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
