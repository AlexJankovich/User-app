import {Container, Div, Wrapper} from "../common/Styled";
import React from "react";
import {postType} from "../redux/PostsReducer";
import {UserName} from "./UserName";

type PostPropsType = {
    newPost: postType[]
}

export const Posts = (props: PostPropsType) => {

    return (
        <Div>
            {props.newPost.map((i) => {
                return <Wrapper key={i.id}>
                    <Container>
                        <UserName userId={i.userId}/>
                        <p><b>{i.title}:</b></p> {i.body}<br/><br/>
                    </Container>
                </Wrapper>
            })}
        </Div>
    )
}