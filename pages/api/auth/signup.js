import { connectDB } from "@/utils/database";
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
    if (req.method == "POST") {
        let hash = await bcrypt.hash(req.body.password, 10)
        console.log(hash);
        console.log(req.body);

        req.body.password = hash

        let db = (await connectDB).db('forum');
        await db.collection('user_local').insertOne(req.body)
        res.status(200).redirect("/list");
    }
}