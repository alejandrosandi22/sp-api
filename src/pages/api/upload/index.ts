import multer from 'multer';
import { dbConnect } from '../../../../utils/database';
import { v4 as uuidv4 } from 'uuid';
import { NextApiResponse } from 'next';
import nc from 'next-connect';
import Kits from '../../../../models/Kits';
import Accesories from '../../../../models/Accesories';
import Lifestyle from '../../../../models/Lifestyle';
import Training from '../../../../models/Training';
import { MulterRequest } from 'types/main';

dbConnect();

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const collectionSave: string = 'lifestyle';

const upload = multer({
  storage: multer.diskStorage({
    destination: `./public/images/${collectionSave}`,
    filename: (_req, _file, cb) => cb(null, `${uuidv4()}.png`),
  }),
});

const apiRoute = nc<MulterRequest, NextApiResponse>({
  onError(error, _req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array('images'));

apiRoute.post(async (req, res) => {
  const { collection } = req.query;

  if (!collection) {
    return res.status(400).json({ error: 'Collection is required' });
  }

  const comments: Array<any> = [
    {
      body: 'Received very quickly good quality',
      author: 'John Doe',
      date: Date.now(),
    },
    {
      body: 'Fuuuuully recommended! Great product is with good quality Fast delivery! Thank you so much! I am very satisfied!',
      author: 'Cameron Curry',
      date: Date.now(),
    },
    {
      body: 'Fast delivery, good quality for the price',
      author: 'John Lawson',
      date: Date.now(),
    },
    {
      body: 'Super quality thank you I will take 3 other thank you ...... fast delivery at the top at the top at the top',
      author: 'Jessica Tyler',
      date: Date.now(),
    },
    { body: 'Very beautiful', author: 'Diana Wall', date: Date.now() },
    {
      body: 'Just perfect! Better than I expected. The seller was very attentive and professional. Fast shipping and well packaged.',
      author: 'Pedro Cox',
      date: Date.now(),
    },
    {
      body: 'Good product. Safe packaging',
      author: 'Mark Holmes',
      date: Date.now(),
    },
    {
      body: 'Thank you! I already bought four. Everything is super!',
      author: 'Thomas White',
      date: Date.now(),
    },
    {
      body: 'Excellent quality I recommend very good product',
      author: 'Joseph Phillips',
      date: Date.now(),
    },
    { body: 'Very good quality', author: 'Rose Ross', date: Date.now() },
    {
      body: 'Very thin fabric. Not recommended!',
      author: 'Michelle Randall',
      date: Date.now(),
    },
  ];

  const images: any = req.files.map(
    (file: any) =>
      `https://sp-api.alejandrosandi.com/images/${collection}/${file.filename}`
  );

  const configData: any = {
    ...req.body,
    images,
    sold: getRandomInt(100, 300),
    rate: [
      getRandomInt(0, 10),
      getRandomInt(0, 20),
      getRandomInt(10, 30),
      getRandomInt(0, 10),
      getRandomInt(90, 120),
    ],
    comments: comments.slice(0, getRandomInt(1, comments.length)),
  };

  try {
    if (collection === 'kits') {
      const newKits = await new Kits(configData);
      await newKits.save();
      return res.status(201).json(newKits);
    }

    if (collection === 'training') {
      const newTaining = await new Training(configData);
      await newTaining.save();
      return res.status(201).json(newTaining);
    }

    if (collection === 'lifestyle') {
      const newLifestyle = await new Lifestyle(configData);
      await newLifestyle.save();
      return res.status(201).json(newLifestyle);
    }

    if (collection === 'accesories') {
      const newAccesories = await new Accesories(configData);
      await newAccesories.save();
      return res.status(201).json(newAccesories);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
