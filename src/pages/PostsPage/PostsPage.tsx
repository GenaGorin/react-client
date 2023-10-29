import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Post from "./components/Post";
import { getPosts } from '../../store/reducers/PostsSlice';

const PostsPage = () => {
    const dispatch = useAppDispatch();
    const posts = useAppSelector(state => state.postsSlice.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, []);



    return <div>
        <h1>Посты</h1>
        {
            posts.map((post) => <Post key={post.id} post={post} />)
        }
    </div>
}

export default PostsPage;