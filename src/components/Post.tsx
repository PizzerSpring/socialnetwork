import React from 'react';
import classpost from "./Post.module.css";

type PostPropsType = {
    likeCount: number
    post: string
}

const Post = (props: PostPropsType) => {
    return (
        <div className={classpost.postscontainer}>
            <img className={classpost.avatar} src="https://memepedia.ru/wp-content/uploads/2020/02/zhak-fresko-citaty-mem.png"/>
            <span className={classpost.postcontent}>{props.post}</span>
            <span className={classpost.postlike}>{props.likeCount} likes</span>
        </div>
    );
};

export default Post;