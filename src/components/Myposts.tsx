import React, {ChangeEvent, RefObject} from 'react';
import Post from "./Post";
import classmyposts from './Myposts.module.css';
import { addPostActionCreator, onPostChangeActionCreator} from "./redux/profileReducer";
import {ActionsTypes} from "./redux/store";
import {MyPostsPropsType} from "./MyPostsContainer";


const Myposts = (props: MyPostsPropsType) => {
    let postsData = props.profilePage.posts.map((el) => {
        return (
            <Post key={el.id} likeCount={el.likeCount} post={el.post}/>
        )
    })
    let newPost:RefObject<HTMLInputElement> = React.createRef();
    const addPost = () => {
        props.addPost();
    }
    const onChanePostMessage = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangePostMessage(e.currentTarget.value);
    }
    return (
        <div className={classmyposts.content}>
            <div className={classmyposts.postsaction}>
                <div className={classmyposts.myposts}>Мои посты</div>
                <div className={classmyposts.postinpbutcontainer}>
                    <input
                        onChange={onChanePostMessage}
                        ref={newPost}
                        value={props.profilePage.newPost}
                        className={classmyposts.postinput}/>
                    <button className={classmyposts.postbutton}  onClick={addPost}>Добавить пост</button>
                </div>
            </div>
            <div>
                {postsData}
            </div>
        </div>
    );
};

export default Myposts;