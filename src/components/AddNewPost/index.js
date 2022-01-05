import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actionCreators';
import { useNavigate } from 'react-router';
import './AddNewPost.scss';

const AddNewPost = ({posts, addPost, currentId}) => {

    const [title, setTitle] = React.useState();
    const [body, setBody] = React.useState();
    const [error, setError] = React.useState();

    console.log(currentId);
    const navigate = useNavigate();

    const handleAddPost = () => {
        if(title && body){
            setError(undefined);
            const post = {
                id: currentId + 1,
                title: title,
                body: body
            }
            console.log(post);
            addPost(post);
            navigate(`/post/${currentId + 1}`);
        } else {
            setError('Please fill all the fields');
        }
    }

    return (
        <div style={{ padding:'16px' }}>
        <div className="form">
            <p className="title">Add New Post</p>
            <textarea className="textarea" placeholder="Blog Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <textarea className="textarea" placeholder="Blog Body" value={body} required onChange={(e) => setBody(e.target.value)}  />
            {error && <p className="error">{error}</p>}
            <button className="btn" onClick={handleAddPost}>ADD</button>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts,
        currentId: state.posts.length == 0 ? 0 : state.posts[(state.posts.length - 1)].id
    }
};

export default connect(mapStateToProps, { addPost })(AddNewPost);