import { connectDB } from "@/utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";

export default async function write(req, res) {
    let session = await getServerSession(req, res, authOptions)
    // console.log(session);   // 로그인 로그아웃 상태 확인

    if (session) {
        req.body.email = session.user.email
        req.body.name = session.user.name

        if (req.method === "POST") {
            try {
                const db = (await connectDB).db('forum');
                let result = await db.collection('post').insertOne(req.body);
                return res.status(200).redirect("/list");
            } catch (err) {
                console.log(err);
            }
        }
    }
}