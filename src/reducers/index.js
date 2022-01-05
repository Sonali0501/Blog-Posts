import { combineReducers } from 'redux';
import { ADD_NEW_POST, EDIT_POST, DELETE_POST, LIKE_POST, UNLIKE_POST } from '../actionCreators/types';

const initialState = [
    {
        id: 1,
        title: 'Initial Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2,
        title: 'Second Post',
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]

const getPosts = (state = initialState , action) => {
    switch(action.type) {
        case DELETE_POST:
            return state.filter(i => i.id != action.payload)
        case ADD_NEW_POST:
            return [...state, action.payload]
        case EDIT_POST:
            const index = state.findIndex(i => i.id == action.payload.id);
            const newPosts = [...state];
            newPosts[index] = action.payload;
            return newPosts
        default:
            return state
    }
};

const getLikedPosts = (state=[], action) => {
    switch(action.type){
        case LIKE_POST:
            return [...state, action.payload]
        case UNLIKE_POST:
            return state.filter(i => i.id != action.payload)
        case DELETE_POST:
            return state.filter(i => i.id != action.payload)
        case EDIT_POST:
            const index = state.findIndex(i => i.id == action.payload.id);
            if(index == -1){
                return state
            } else {
                const newPosts = [...state];
                newPosts[index] = action.payload;
                return newPosts
            }
        default:
            return state
    }
}

export default combineReducers({
    posts: getPosts,
    likedPosts: getLikedPosts
});