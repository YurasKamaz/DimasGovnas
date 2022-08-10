import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import MyButton from './UI/button/MyButton';


const PostItem = (props) => {
    const router = useHistory()
    const [likes, setCount] = useState(5)
    const [flag, setFlag] = useState(false)
    return (
        <div className='post'>
            <div className='postContent'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <h1>{(flag ? 1:0) + likes}</h1>
            <img src={flag ? 'unknown (1).png':'unknown.png'} onClick={() => setFlag(!flag)}></img>
            <MyButton onClick = {() => router.push(`/posts/${props.post.id}`)} className='post__btns'>Открыть</MyButton>
            <MyButton onClick = {() => props.remove(props.post)} className='post__btns'>Удалить</MyButton>
        </div>
    )
}

export default PostItem;