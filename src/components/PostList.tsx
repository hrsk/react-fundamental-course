import {PostItem, ResponsePostType} from "./PostItem.tsx";

type PropsType = {
    posts: ResponsePostType[]
    title: string
    removePost: (postId: number) => void
}

export const PostList = ({posts, title, removePost}: PropsType) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {
                posts.map((post, index) => {

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
