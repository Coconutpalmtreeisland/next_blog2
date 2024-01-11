import { connectDB } from "@/utils/database"

export default async function List() {
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();

    return (
        <div className="list__wrap">
            {result.map((list, key) => (
                <div className="list" key={key}>
                    <span className="cate">교육</span>
                    <h3 className="title">{list.title}</h3>
                    <p className="desc">{list.content}</p>
                    <div className="author">{list.name}</div>
                </div>
            ))}
        </div>
    )
}