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

export type FilterType = {
    sortValue: SortKeyType,
    queryValue: string
}

function App() {

    const [posts, setPosts] = useState<ResponsePostType[]>([
        // {id: '1', title: 'asdsad', postText: '1123'},
        // {id: '2', title: 'Javascript', postText: 'sad'},
        // {id: '3', title: 'aJavascasdasdript', postText: 'asdasd'},
        // {id: '4', title: 'Javasasdasdcript', postText: 'Description'},
        // {id: '5', title: 'bJbbbavascript', postText: 'Description'},
        // {id: '6', title: 'Javaszxcxccript', postText: 'Description'},
        // {id: '7', title: 'zJavascript', postText: 'Description'},
    ])

    // const [selectedSort, setSelectedSort] = useState<SortKeyType | ''>('')
    // const [searchQuery, setSearchQuery] = useState<string>('')

    const [filter, setFilter] = useState<FilterType>({
        sortValue: 'title', queryValue: ''
    })

    const [modalWindow, setModalWindow] = useState<boolean>(false)

    const optionValues: OptionValue[] = [
        {optionValue: 'title', optionTitle: 'Sort by title'},
        {optionValue: 'body', optionTitle: 'Sort by text'},
    ]

    useEffect(() => {
        fetchPosts()
    }, [])


    const fetchPosts = async () => {
        const posts = await PostService.getPosts()
        setPosts(posts.data)
    }

    const sortedAndSearchedPosts = usePosts(posts, filter.sortValue, filter.queryValue)
    // const sortedPosts = useMemo(() => {
    //     console.log('get sorted post')
    //     if (selectedSort) {
    //         return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    //     }
    //     return posts
    // }, [selectedSort, posts])

    /*    const sortedPosts = useMemo(() => {
            console.log('get sorted post')
            if (filter.sortValue) {
                return [...posts].sort((a, b) => a[filter.sortValue].localeCompare(b[filter.sortValue]))
            }
            return posts
        }, [filter, posts])*/

    // const sortedAndSearchedPosts = useMemo(() => {
    //     if (selectedSort === 'title') {
    //         return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    //     } else {
    //         return sortedPosts.filter(post => post.postText.toLowerCase().includes(searchQuery.toLowerCase()))
    //     }
    // }, [selectedSort, searchQuery, sortedPosts])

    /*    const sortedAndSearchedPosts = useMemo(() => {
            if (filter.sortValue === 'title') {
                return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.queryValue.toLowerCase()))
            } else {
                return sortedPosts.filter(post => post.postText.toLowerCase().includes(filter.queryValue.toLowerCase()))
            }
        }, [filter, sortedPosts])*/

    const addPost = (newPost: ResponsePostType) => {
        setPosts([...posts, newPost])
        setModalWindow(false)
    }

    const removePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId))
    }

    // const handleSortChange = (sortKey: SortKeyType) => {
    //     setSelectedSort(sortKey)
    //     // setPosts([...posts].sort((a, b) => a[sortKey].localeCompare(b[sortKey])))
    // }

    const activateModalWindow = () => {
        setModalWindow(true)
    }

    return (
        <div style={{marginTop: '25px'}} className={"App"}>
            {/*<PostForm addPost={addPost}/>*/}
            <CustomButton onClick={activateModalWindow}>{'Create post'}</CustomButton>
            <CustomModal visible={modalWindow} setVisible={setModalWindow}>
                <PostForm addPost={addPost}/>
            </CustomModal>
            <div style={{padding: '15px 0'}}/>
            <PostFilter optionValues={optionValues} filter={filter} setFilter={setFilter}/>
            {/*<CustomInput value={searchQuery}*/}
            {/*             onChange={(e) => setSearchQuery(e.currentTarget.value)}*/}
            {/*             placeholder={'Search...'}/>*/}
            {/*<CustomSelect options={optionValues}*/}
            {/*              selectedSort={selectedSort}*/}
            {/*              defaultValue={'Sort by'}*/}
            {/*              onChange={handleSortChange}/>*/}
            {/*{*/}
            {/*    sortedAndSearchedPosts.length*/}
            {/*        ? <PostList posts={sortedAndSearchedPosts} removePost={removePost}*/}
            {/*                    title={'Список постов про Javascript'}/>*/}
            {/*        : <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>*/}
            {/*}*/}
            <PostList posts={sortedAndSearchedPosts} removePost={removePost} title={'Список постов про Javascript'}/>
        </div>
    )
}

export default App
