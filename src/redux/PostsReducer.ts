import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type postType = {
    userId: number
    id: number
    title: string
    body: string
}

export type userType = {
    name: string
    username: string
    id:number
}

export type postSateType = {
    posts: postType[]
    users: userType[]
    currentPage: number
    perPage: number
    totalPageCount: number
    searchValue:string
}

const postSate: postSateType = {
    posts: [
        {
            body: '',
            id: 0,
            title: '',
            userId: 0,
        }
    ],
    users: [
        {
            name:'',
            username:'',
            id:0
        }
    ],
    currentPage: 1,
    perPage: 0,
    totalPageCount: 1,
    searchValue:''
}

const slice = createSlice({
    name: 'Posts',
    initialState: postSate,
    reducers: {
        setPosts(state, action: PayloadAction<{ posts: postType[] }>) {
            return {
                ...state,
                posts: [...action.payload.posts]
            }
        },
        setUsers(state, action: PayloadAction<{ users: userType[] }>) {
            return {
                ...state,
                users: [...action.payload.users]
            }
        },

        setTotalPagesCount(state, action:PayloadAction<{totalCount:number}>){
            return {
                ...state,
                totalPageCount: action.payload.totalCount
            }
        },
        setPerPage(state, action:PayloadAction<{perPage:number}>){
            return {
                ...state,
                perPage: action.payload.perPage
            }
        },
        setCurrentPage(state, action:PayloadAction<{currentPage:number}>){
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
        },
        setSearchValue(state, action:PayloadAction<{searchValue:string}>){
            return{
                ...state,
                searchValue: action.payload.searchValue
            }
        }

    }
})

export const {
    setPosts,
    setTotalPagesCount,
    setPerPage,
    setCurrentPage,
    setUsers,
    setSearchValue} = slice.actions
export const postsReducer = slice.reducer