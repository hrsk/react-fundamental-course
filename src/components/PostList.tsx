import {PostItem, PostType} from "./PostItem.tsx";

type PropsType = {
    posts: PostType[]
    title: string
    removePost: (postId: string) => void
}

export const PostList = ({posts, title, removePost}: PropsType) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
    }

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
