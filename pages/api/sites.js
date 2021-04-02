// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllSites } from '@/lib/db-admin';
import db from '@/lib/firebase-admin';

export default async (_, res) => {

  const sites = await getAllSites();

  res.status(200).json({ sites });

}