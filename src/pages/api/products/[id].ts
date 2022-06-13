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

  const method: string | undefined = req.method;
  const id: string | string[] = req.query.id;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method '${method}' Not Allowed` });
  }

  try {
    const kits: ProductType | null = await Kits.findById(id);
    const training: ProductType | null = await Training.findById(id);
    const lifestyle: ProductType | null = await Lifestyle.findById(id);
    const accesories: ProductType | null = await Accesories.findById(id);

    if (kits) return res.status(200).json(kits);
    if (training) return res.status(200).json(training);
    if (lifestyle) return res.status(200).json(lifestyle);
    if (accesories) return res.status(200).json(accesories);
    res.status(404).json({ empty: "Can't find products" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
