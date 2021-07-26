import React from 'react';
import {useSelector} from 'react-redux'

import Post from './Post/post.js'
import useStyles from './styles.js'
const Posts=()=>{
    const posts=useSelector((state)=>state.posts);
    const classes=useStyles();
    console.log('pospsts',posts);
    return(
        <>
        <Post/>
        </>
    );
}
export default Posts
