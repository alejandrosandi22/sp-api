import { NextApiRequest } from 'next';

type ProductType = {
  _id: string;
  team: string;
  image: string;
  endpoint: string;
  locality: string;
  type: string;
  season: string;
  price: string;
  category: string;
  size: string[];
  sold: number;
  createdAt: string;
  updatedAt: string;
};

interface MulterRequest extends NextApiRequest {
  file: any;
  files: any;
}

export type { ProductType, MulterRequest };
