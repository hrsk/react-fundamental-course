import './styles/App.css'
import {PostType} from "./components/PostItem.tsx";
import {ChangeEvent, useState} from "react";
import {PostList} from './components/PostList.tsx';
import {CustomInput} from "./components/UI/input/CustomInput.tsx";
import {CustomButton} from "./components/UI/button/CustomButton.tsx";
import classes from "./components/UI/input/CustomInput.module.css";
import styles from "./components/UI/button/CustomButton.module.css"

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

    const [post, setPost] = useState<{ title: string, postText: string }>({title: '', postText: ''})
    // const [postTitle, setPostTitle] = useState('')
    // const [postDescription, setPostDescription] = useState('')

    const addNewPost = (e: any) => {
        e.preventDefault()
        // const newPost: PostType = {id: Date.now(), title: post.title, postText: post.postText}
        setPosts([...posts, {...post, id: Date.now()}])
        setPost({title: '', postText: ''})
        // setPostTitle('')
        // setPostDescription('')
    }
    const onChangePostTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
        // setPostTitle(e.currentTarget.value)
    }
    //
    const onChangePostDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, postText: e.currentTarget.value})
        // setPostDescription(e.currentTarget.value)
    }

    return (
        <div className={"App"}>
            <form>
                {/* //TODO: Управляемый компонент*/}
                <CustomInput className={classes.input} value={post.title} type={'text'}
                             onChange={onChangePostTitleHandler}
                             placeholder={'Название поста'}/>
                <CustomInput className={classes.input} value={post.postText}
                             onChange={onChangePostDescriptionHandler}
                             type={'text'}
                             placeholder={'Описание поста'}/>
                <CustomButton className={styles.button} onClick={addNewPost}>Создать пост</CustomButton>
            </form>
            <PostList posts={posts} title={'Список постов про Javascript'}/>
        </div>
    )
}

export default App
