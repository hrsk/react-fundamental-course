export type PostType = {
    id: number
    title: string
    postText: string
}

type PropsType = {
    post: PostType
}

export const PostItem = ({post}: PropsType) => {

    return (
        <div className={"post"} key={post.id}>
            <div className={"post__content"}>
                <strong>{post.id}. {post.title + ' ' + post.id}</strong>
                <div>
                    {post.postText}
                </div>
            </div>
            <div className={"post__bttns"}>
                <button>
                    Удалить
                </button>
            </div>
        </div>
    );
};
