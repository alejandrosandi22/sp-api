import Kits from '../../../../models/Kits';
import { dbConnect } from '../../../../utils/database';
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
  const { sort, limit, order }: any = req.query;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method '${method}' Not Allowed` });
  }

  try {
    const data: Array<ProductType> = await Kits.find()
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
