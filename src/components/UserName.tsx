import {memo} from "react";
import {userType} from "../redux/PostsReducer";
import {useSelector} from "react-redux";
import {RootStateType} from "../redux/store";

interface UserNameType {
    userId: number
}

export const UserName = memo((props: UserNameType) => {

    const users = useSelector<RootStateType, userType[]>(state => state.posts.users)

    const user: userType = users.filter(u => u.id === props.userId)[0]

    return <div>
        {!user
            ? 'loading...'
            : <>
                <p><b>UserName: {user.username}</b></p>
                <p><b>Name: {user.name}</b></p>
            </>
        }
    </div>
})

