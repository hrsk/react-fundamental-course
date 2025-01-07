import './styles/App.css'
import {ResponsePostType} from "./components/PostItem.tsx";
import {useEffect, useState} from "react";
import {PostList} from './components/PostList.tsx';
import {PostForm} from "./components/PostForm.tsx";
import {OptionValue, SortKeyType} from "./components/UI/select/CustomSelect.tsx";
import {PostFilter} from "./components/PostFilter.tsx";
import {CustomModal} from "./components/UI/modal/CustomModal.tsx";
import {CustomButton} from "./components/UI/button/CustomButton.tsx";
import {usePosts} from "./hooks/usePosts.ts";
import {PostService} from "./API/PostService.ts";
import {Loader} from "./components/UI/loader/Loader.tsx";
import {useFetching} from "./hooks/useFetching.ts";

export type FilterType = {
    sortValue: SortKeyType,
    queryValue: string
}

function App() {

    const [posts, setPosts] = useState<ResponsePostType[]>([])
    const [filter, setFilter] = useState<FilterType>({sortValue: 'title', queryValue: ''})
    const [postsTotalCount, setPostsTotalCount] = useState(0)
    const [modalWindow, setModalWindow] = useState<boolean>(false)

    const [fetchPosts, isLoading, isError] = useFetching(
        async () => {
            const posts = await PostService.getPosts()
            setPosts(posts.data)
            setPostsTotalCount(posts.data.length)
        }
    )

    const optionValues: OptionValue[] = [
        {optionValue: 'title', optionTitle: 'Sort by title'},
        {optionValue: 'body', optionTitle: 'Sort by text'},
    ]

    useEffect(() => {
        fetchPosts()
    }, [])

    const sortedAndSearchedPosts = usePosts(posts, filter.sortValue, filter.queryValue)

    const addPost = (newPost: ResponsePostType) => {
        setPosts([...posts, newPost])
        setModalWindow(false)
    }

    const removePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    const activateModalWindow = () => {
        setModalWindow(true)
    }

    const pageLimit = 10

    const selectPage = (pageNumber: number) => {
        return async () => {
            const posts = await PostService.getPage(pageLimit, pageNumber)
            setPosts(posts.data)
        }
    }

    return (
        <div style={{marginTop: '25px'}} className={"App"}>
            <CustomButton onClick={activateModalWindow}>{'Create post'}</CustomButton>
            <CustomModal visible={modalWindow} setVisible={setModalWindow}>
                <PostForm addPost={addPost}/>
            </CustomModal>
            <PostFilter optionValues={optionValues} filter={filter} setFilter={setFilter}/>
            {
                isLoading
                    ? <Loader/>
                    : <PostList posts={sortedAndSearchedPosts} removePost={removePost}
                                title={'Список постов про Javascript'} postsCount={postsTotalCount} selectPage={selectPage}/>
            }
        </div>
    )
}

export default App
