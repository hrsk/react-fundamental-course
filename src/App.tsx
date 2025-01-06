import './styles/App.css'
import {PostType} from "./components/PostItem.tsx";
import {useState} from "react";
import {PostList} from './components/PostList.tsx';
import {PostForm} from "./components/PostForm.tsx";

function App() {

    const [posts, setPosts] = useState<PostType[]>([
        {id: 1, title: 'Javascript', postText: 'Description'},
        {id: 2, title: 'Javascript', postText: 'Description'},
        {id: 3, title: 'Javascript', postText: 'Description'},
        {id: 4, title: 'Javascript', postText: 'Description'},
        {id: 5, title: 'Javascript', postText: 'Description'},
        {id: 6, title: 'Javascript', postText: 'Description'},
        {id: 7, title: 'Javascript', postText: 'Description'},
    ])

    const addPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
    }

    const removePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    return (
        <div className={"App"}>
            <PostForm addPost={addPost} />
            <PostList posts={posts} removePost={removePost} title={'Список постов про Javascript'}/>
        </div>
    )
}

export default App
