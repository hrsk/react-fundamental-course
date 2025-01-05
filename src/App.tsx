import './styles/App.css'
import {PostType} from "./components/PostItem.tsx";
import {useState} from "react";
import {PostList} from './components/PostList.tsx';

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

    return (
        <div className={"App"}>
            <PostList posts={posts} title={'Список постов про Javascript'}/>
        </div>
    )
}

export default App
