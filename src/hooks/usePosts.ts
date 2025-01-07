import {useMemo} from "react";
import {ResponsePostType} from "../components/PostItem.tsx";
import {SortKeyType} from "../components/UI/select/CustomSelect.tsx";

export const useSortedPosts = (posts: ResponsePostType[], sortValue: SortKeyType) => {
    const sortedPosts = useMemo(() => {
        if (sortValue) {
            return [...posts].sort((a, b) => a[sortValue].toString().localeCompare(b[sortValue].toString()))
        }
        return posts
    }, [sortValue, posts])

    return sortedPosts
}

export const usePosts = (posts: ResponsePostType[], sortValue: SortKeyType, queryValue: string) => {

    const sortedPosts = useSortedPosts(posts, sortValue)

    const sortedAndSearchedPosts = useMemo(() => {
        if (sortValue === 'title') {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(queryValue.toLowerCase()))
        } else {
            return sortedPosts.filter(post => post.body.toLowerCase().includes(queryValue.toLowerCase()))
        }
    }, [queryValue, sortValue, sortedPosts])

    return sortedAndSearchedPosts
}