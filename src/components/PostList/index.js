import React from 'react';
import { connect } from 'react-redux';
import './PostList.scss';
import { useNavigate } from 'react-router';

const PostList = ({posts}) => {

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
                        <button onClick={() => goToPost(item.id)} className="readBtn">Read</button>
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps)(PostList);