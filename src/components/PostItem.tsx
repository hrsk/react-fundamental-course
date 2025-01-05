
export type PostType = {
    id: number
    title: string
    postText: string
}

type PropsType = {
    post: PostType
    postNumber: number
}

export const PostItem = ({post, postNumber}: PropsType) => {

    return (
        <div className={"post"} key={post.id}>
            <div className={"post__content"}>
                <strong>{postNumber}. {post.title}</strong>
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
