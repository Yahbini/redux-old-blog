import { createAction, createReducer } from "@reduxjs/toolkit";
import { initialPostList } from "constants/blog";
import { Post } from "types/blog.type";

interface BlogState {
    postList: Post[]
}

const initialState = {
    postList: initialPostList
}

const blogReducer = createReducer(initialState, builder => {
    // * xử lí action và update state

})

export const addPost = createAction

export default blogReducer