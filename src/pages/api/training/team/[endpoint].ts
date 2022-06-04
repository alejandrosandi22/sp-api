import Training from '../../../../../models/Training';
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
    const data: Array<ProductType> = await Training.find({ endpoint })
      .limit(limit ?? 10)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
