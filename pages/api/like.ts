import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { client } from '../../utils/clients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { userId, postId, like } = req.body;

        const data =
            like ? await client
                .patch(postId)
                .setIfMissing({ likes: [] })
                .insert('after', 'likes[0]', [
                    {
                        key: uuidv4(),
                        ref: userId
                    }
                ])
                .commit()
                : await client
                    .patch(postId)
                    .unset([`likes[ref=="${userId}"]`])
                    .commit();

        res.status(200).json(data);
    }
}