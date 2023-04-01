import type { NextApiRequest, NextApiResponse } from "next";
import { getDatabase, ref, child, get, onValue, set } from "firebase/database";
import { database } from "../../../../lib/firebase";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const dbRef = ref(database, `views/notes/${req.query.slug}`);
    const snapshot = await get(dbRef);
    if (req.method == "POST") {
        if (snapshot.exists()) {
            await set(dbRef, snapshot.val() + 1);
        } else {
            await set(dbRef, 1);
        }
    }
    res.status(200).json({ views: snapshot.val() });
}
