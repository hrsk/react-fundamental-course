import {CustomButton} from "../button/CustomButton.tsx";
import classes from './Pagination.module.css'
import {useState} from "react";

type PropsType = {
    postsCount: number
    pageLimit: number
    selectPage: (pageNumber: number) => void
}

export const Pagination = ({postsCount, pageLimit, selectPage}: PropsType) => {

    const allPages = Math.ceil(postsCount / pageLimit)

    const pages = []

    for (let i = 1; i <= allPages; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map(page => {
                    return (
                        <CustomButton className={classes.selected}
                                      onClick={() => {
                                          selectPage(page);
                                          console.log(page)
                                      }}>{page}</CustomButton>
                    )
                })
            }
        </div>
    );
};
