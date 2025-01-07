import {CustomButton} from "./UI/button/CustomButton.tsx";

export type ResponsePostType = {
    userId: number
    id: number
    title: string
    body: string
}

// export type PostType = {
//     id: string
//     title: string
//     postText: string
// }

type PropsType = {
    post: ResponsePostType
    postNumber: number
    removePostHandler: () => void
}

export const PostItem = ({post, postNumber, removePostHandler}: PropsType) => {

    return (
        <div className={"post"} key={post.id}>
            <div className={"post__content"}>
                <strong>{postNumber}. {post.title}</strong>
                <div>
                    {post.body}
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
