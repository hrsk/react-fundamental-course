import {PostItem, PostType} from "./PostItem.tsx";

type PropsType = {
    posts: PostType[]
    title: string
}

export const PostList = ({posts, title}: PropsType) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {
                posts.map((post: PostType, index) => {
                    return (
                        <PostItem postNumber={index + 1} post={post}/>
                    )
                })
            }

        </div>
    );
};
