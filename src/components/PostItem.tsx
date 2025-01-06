import {CustomButton} from "./UI/button/CustomButton.tsx";

export type PostType = {
    id: string
    title: string
    postText: string
}

type PropsType = {
    post: PostType
    postNumber: number
    removePostHandler: () => void
}

export const PostItem = ({post, postNumber, removePostHandler}: PropsType) => {

    return (
        <div className={"post"} key={post.id}>
            <div className={"post__content"}>
                <strong>{postNumber}. {post.title}</strong>
                <div>
                    {post.postText}
                </div>
            </div>
            <div className={"post__bttns"}>
                <CustomButton onClick={removePostHandler}>
                    Удалить
                </CustomButton>
            </div>
        </div>
    );
};
