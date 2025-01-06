import {CustomInput} from "./UI/input/CustomInput.tsx";
import classes from "./UI/input/CustomInput.module.css";
import {CustomButton} from "./UI/button/CustomButton.tsx";
import {ChangeEvent, useState} from "react";
import {PostType} from "./PostItem.tsx";

type PropsType = {
    addPost: (post: PostType) => void
}
export const PostForm = ({addPost}: PropsType) => {

    const [post, setPost] = useState<{ title: string, postText: string }>({title: '', postText: ''})


    const addPostHandler = (e: ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newPost: PostType = {id: Date.now().toString(), ...post}
        addPost(newPost)
        setPost({title: '', postText: ''})
    }
    const onChangePostTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const onChangePostDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, postText: e.currentTarget.value})
    }

    return (
        <form>
            {/* //TODO: Управляемый компонент*/}
            <CustomInput className={classes.input} value={post.title} type={'text'}
                         onChange={onChangePostTitleHandler}
                         placeholder={'Название поста'}/>
            <CustomInput className={classes.input} value={post.postText}
                         onChange={onChangePostDescriptionHandler}
                         type={'text'}
                         placeholder={'Описание поста'}/>
            <CustomButton onClick={addPostHandler}>Create</CustomButton>
        </form>
    );
};
