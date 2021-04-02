// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllFeedback } from '@/lib/db-admin';

export default async (req, res) => {

    const siteId = req.query.siteId;

    const feedback = await getAllFeedback(siteId)

    res.status(200).json({ feedback });

}