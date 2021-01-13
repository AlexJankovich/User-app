import {Dispatch} from "react";
import {setPosts} from "../PostsReducer";

export const GetPosts = () => {
    return (dispatch: Dispatch<any>) =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                dispatch(setPosts({posts: json}))
            })
            .catch(err => console.log(err))
    }
}