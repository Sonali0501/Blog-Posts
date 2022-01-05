import { ADD_NEW_POST, EDIT_POST, DELETE_POST, LIKE_POST, UNLIKE_POST } from './types';

export const likePost = (data) => {
    return {
        type: LIKE_POST,
        payload: data
    }
}

export const unlikePost = (id) => {
    return {
        type: UNLIKE_POST,
        payload: id
    }
}

export const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    }
}

export const addPost = (post) => {
    return {
        type: ADD_NEW_POST,
        payload: post
    }
}

export const editPost = (post) => {
    return {
        type: EDIT_POST,
        payload: post
    }
}