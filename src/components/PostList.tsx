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
                posts.map((post: PostType) => {
                    return (
                        <PostItem post={post}/>
                    )
                })
            }

        </div>
    );
};
