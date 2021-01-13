import {Paginator} from "./utils/Paginator";
import React, {memo, useCallback, useEffect} from "react";
import {postSateType, postType, setCurrentPage, setPerPage, setTotalPagesCount} from "../redux/PostsReducer";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../redux/store";
import {Posts} from "./Posts";

type ContainerPropsType = {
    posts: postType[]
}

export const PostContainer: React.FC<ContainerPropsType> = memo(({posts}) => {

        const postsData = useSelector<RootStateType, postSateType>(state => state.posts)
        const {currentPage, perPage, totalPageCount} = postsData
        const dispatch = useDispatch()

        useEffect(() => {
            dispatch(setTotalPagesCount({totalCount: posts.length}));
        }, [dispatch, posts.length]);

        let newPost: postType[] = []

        if (currentPage === Math.ceil(totalPageCount / perPage)) {
            newPost = [...posts.slice((currentPage - 1) * perPage)]
        } else {
            newPost = [...posts.slice((currentPage - 1) * perPage,
                currentPage + perPage >= totalPageCount
                    ? posts.length - 1
                    : (currentPage - 1) * perPage + perPage)];
        }

        const perPageChange = useCallback((value: number) => {
            dispatch(setPerPage({perPage: value}));
        }, [dispatch]);

        const changePageHandler = useCallback((value: number) => {
            dispatch(setCurrentPage({currentPage: value}));
        }, [dispatch]);

        return (
            <>
                {perPage === 0
                    ? null
                    : <Posts newPost={newPost}/>}
                <Paginator
                    totalCount={totalPageCount}
                    currentPage={currentPage}
                    changePageHandler={changePageHandler}
                    changePerPageHandler={perPageChange}
                />
            </>
        );
    }
)