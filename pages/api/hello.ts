// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'micro-cors';

type Data = {
  name: string;
};

const cors = Cors({
  allowMethods: ['GET', 'HEAD'],
  origin: 'https://vercel.com',
});

function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' });
}

export default cors(handler as any);
