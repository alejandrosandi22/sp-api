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
  const { sort, limit, order, where }: any = req.query;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method '${method}' Not Allowed` });
  }

  try {
    let newWhere = {};

    if (where) {
      const dataSplit = where.split('=');
      newWhere = { [dataSplit[0]]: dataSplit[1] };
    }

    const data: ProductType[] = await Kits.find(newWhere)
      .limit(limit ?? undefined)
      .sort({
        [sort ?? 'createdAt']: order ? (order === 'asc' ? 1 : -1) : 1,
      });
    res.status(200).json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
