import axios from "axios";
import {ResponsePostType} from "../components/PostItem.tsx";

const instance = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
    headers: {},
});

export const PostService = {
    async getPosts() {
        return await instance.get<ResponsePostType[]>('posts')
    }

}