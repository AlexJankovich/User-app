import {Dispatch} from "react";
import {setUsers} from "../PostsReducer";

export const GetUsers = () => {
    return (dispatch: Dispatch<any>) =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                dispatch(setUsers({users: json}))
            })
            .catch(err => console.log(err))
    }
}