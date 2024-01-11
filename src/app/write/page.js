export default function Write() {

    return (
        <div className='login__wrap'>
            <div className="login__header">
                <h3>Write</h3>
                <p>글을 작성하시겠습니까?</p>
            </div>
            <form action="/api/post/write" method="POST" className='login__form'>
                <fieldset>
                    <legend className="blind">글쓰기 영역</legend>
                    <div>
                        <label htmlFor="youName" className="required blind">글 제목</label>
                        <input type="text" name="title" id="youName" placeholder='글 제목을 작성하세요!' />
                    </div>
                    <div>
                        <label htmlFor="youConts" className="required blind">글 내용</label>
                        <textarea name="content" id="youConts" placeholder='글 내용을 작성하세요!' />
                    </div>
                    <button type="submit" className="btn__style2 mt30">글쓰기</button>
                </fieldset>
            </form>
        </div>
    )
}