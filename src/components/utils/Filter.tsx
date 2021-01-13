import React, {ChangeEvent} from 'react';
import {Container, SimpleWrapper, SomeItem, Wrapper} from '../../common/Styled';
import {postType, setSearchValue} from '../../redux/PostsReducer';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from '../../redux/store';
import {PostContainer} from "../PostContainer";


export type CatalogPropsType = {
    data: postType[]
}

export const Filter = React.memo((props: CatalogPropsType) => {

    const dispatch = useDispatch();
    const searchValue = useSelector<RootStateType, string>(state => state.posts.searchValue);

    const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue({searchValue: e.currentTarget.value}));
    };

    const searchData = props.data.filter(i => i.body.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);

    return (
        <>
            <Wrapper>
                <Container style={{display: 'flex', flexWrap: 'wrap'}}>
                    <SimpleWrapper>
                        <SomeItem>search</SomeItem>
                        <input
                            value={searchValue}
                            onChange={changeInputHandler}
                            style={{fontSize: '1.3rem'}}
                        />
                    </SimpleWrapper>

                </Container>
            </Wrapper>
            <PostContainer posts={searchData}/>
        </>
    );
});