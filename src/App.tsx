import './styles/App.css'
import {PostType} from "./components/PostItem.tsx";
import {useState} from "react";
import {PostList} from './components/PostList.tsx';
import {PostForm} from "./components/PostForm.tsx";
import {CustomSelect, OptionValue, SortKeyType} from "./components/UI/select/CustomSelect.tsx";

function App() {

    const [posts, setPosts] = useState<PostType[]>([
        {id: '1', title: 'asdsad', postText: '1123'},
        {id: '2', title: 'Javascript', postText: 'sad'},
        {id: '3', title: 'aJavascasdasdript', postText: 'asdasd'},
        {id: '4', title: 'Javasasdasdcript', postText: 'Description'},
        {id: '5', title: 'bJbbbavascript', postText: 'Description'},
        {id: '6', title: 'Javaszxcxccript', postText: 'Description'},
        {id: '7', title: 'zJavascript', postText: 'Description'},
    ])

    const [selectedSort, setSelectedSort] = useState<SortKeyType | ''>('')

    const optionValues: OptionValue[] = [
        {optionValue: 'title', optionTitle: 'Sort by title'},
        {optionValue: 'postText', optionTitle: 'Sort by text'},
    ]

    const addPost = (newPost: PostType) => {
        setPosts([...posts, newPost])
    }

    const removePost = (postId: string) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    const handleSortChange = (sortKey: SortKeyType) => {
        setSelectedSort(sortKey)
        setPosts([...posts].sort((a, b) => a[sortKey].localeCompare(b[sortKey])))
    }

    return (
        <div className={"App"}>
            <PostForm addPost={addPost}/>
            <div style={{padding: '15px 0'}}/>
            <CustomSelect options={optionValues}
                          selectedSort={selectedSort}
                          defaultValue={'Sort by'}
                          onChange={handleSortChange}/>
            {
                posts.length
                    ? <PostList posts={posts} removePost={removePost} title={'Список постов про Javascript'}/>
                    : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
            }

        </div>
    )
}

export default App
