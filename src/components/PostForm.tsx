import {CustomInput} from "./UI/input/CustomInput.tsx";
import classes from "./UI/input/CustomInput.module.css";
import {CustomButton} from "./UI/button/CustomButton.tsx";
import {ChangeEvent, useState} from "react";
import {ResponsePostType} from "./PostItem.tsx";

type PropsType = {
    addPost: (post: ResponsePostType) => void
}
export const PostForm = ({addPost}: PropsType) => {

    const [post, setPost] = useState<{ title: string, body: string }>({title: '', body: ''})


    const addPostHandler = (e: ChangeEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const newPost: ResponsePostType = {id: Date.now(), userId: Date.now(), ...post}
        addPost(newPost)
        setPost({title: '', body: ''})
    }
    const onChangePostTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, title: e.currentTarget.value})
    }

    const onChangePostDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPost({...post, body: e.currentTarget.value})
    }

    return (
        <form>
            {/* //TODO: Управляемый компонент*/}
            <CustomInput className={classes.input} value={post.title} type={'text'}
                         onChange={onChangePostTitleHandler}
                         placeholder={'Название поста'}/>
            <CustomInput className={classes.input} value={post.body}
                         onChange={onChangePostDescriptionHandler}
                         type={'text'}
                         placeholder={'Описание поста'}/>
            <CustomButton onClick={addPostHandler}>Create</CustomButton>
        </form>
    );
};
