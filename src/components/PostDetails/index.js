import React, {useState, useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { likePost, unlikePost, deletePost } from '../../actionCreators';
import './PostDetails.scss';

const PostDetails = ({posts, likedPosts, likePost, unlikePost, deletePost}) => {

    const { id } = useParams();
    const post = useSelector(state => state.posts.find(i => i.id==id));
    const navigate = useNavigate();
    const [isLiked, setIsLiked] = useState();


    useEffect(() => {
        console.log(likedPosts);
        const x = likedPosts.filter(i => i.id == id)
        console.log(x);
        
        if(x.length === 0){
            setIsLiked(false)
        }
        else{
            setIsLiked(true)
        }
    },[likedPosts]);

    const handleDelete = (id) => {
        deletePost(id);
        navigate('/');
    } 

    return (
        <div style={{ padding:'16px' }}>
        <div className="postDetails">
            <p className="title">{post?.title}</p>
            <div className="buttons">
                <button onClick={() => isLiked ? unlikePost(id) : likePost(post)}>{isLiked ? 'UNLIKE' : 'LIKE'}</button>
                <button onClick={() => navigate(`/edit_post/${id}`)}>EDIT</button>
                <button onClick={() => handleDelete(id)}>DELETE</button>
            </div>
            <p className="body">{post?.body}</p>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts,
        likedPosts: state.likedPosts
     }
}

export default connect(mapStateToProps,{likePost, unlikePost, deletePost})(PostDetails);