import {PostItem, PostType} from "./PostItem.tsx";

type PropsType = {
    posts: PostType[]
    title: string
    removePost: (postId: number) => void
}

export const PostList = ({posts, title, removePost}: PropsType) => {

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {
                posts.map((post: PostType, index) => {

                    const removePostHandler = () => {
                        removePost(post.id)
                    }

                    return (
                        <PostItem postNumber={index + 1} post={post} removePostHandler={removePostHandler}/>
                    )
                })
            }

        </div>
    );
};
