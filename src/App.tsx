import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "./redux/store";
import {postSateType} from './redux/PostsReducer';
import {Div} from "./common/Styled";
import {Preloader} from "./common/Preloader";
import {GetPosts} from './redux/thunks/getPostThunk';
import {GetUsers} from './redux/thunks/getUsersThunk';
import { Filter } from './components/utils/Filter';

function App() {

    const postsData = useSelector<RootStateType, postSateType>(state => state.posts)
    const {posts} = postsData
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetPosts())
        dispatch(GetUsers())
    }, [dispatch])

    return (
        <Div>
            {posts.length === 1
                ? <Preloader/>
                : <Filter data={posts}/>
            }
        </Div>
    );
}

export default App;
