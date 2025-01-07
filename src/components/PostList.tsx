import {PostItem, ResponsePostType} from "./PostItem.tsx";
import {Pagination} from "./UI/pagination/Pagination.tsx";

type PropsType = {
    posts: ResponsePostType[]
    postsCount: number
    title: string
    removePost: (postId: number) => void
    selectPage: (pageNumber: number) => void
}

export const PostList = ({posts, title, removePost, postsCount, selectPage}: PropsType) => {

    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <Pagination pageLimit={10} postsCount={postsCount} selectPage={selectPage}/>
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
