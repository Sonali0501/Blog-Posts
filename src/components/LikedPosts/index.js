import React from 'react';
import { connect } from 'react-redux';
import '../PostList/PostList.scss';
import { useNavigate } from 'react-router';

const LikedPosts = ({posts}) => {

    let navigate = useNavigate();

    const goToPost = (id) => {
        navigate(`/post/${id}`);
    }

    return (
        <div className="postList">
            {posts.length == 0 ? <p className="no">No Posts Available</p> :
            posts?.map(item => {
                return (
                    <div className="postBox" key={item.id}>
                        <p className="postTitle">{item.title}</p>
                        <p className="postBody">{item.body}</p>
                        <button className="readBtn" onClick={() => goToPost(item.id)}>Read</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { posts: state.likedPosts }
}

export default connect(mapStateToProps)(LikedPosts);