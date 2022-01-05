import React from 'react';
import { connect, useSelector } from 'react-redux';
import { editPost } from '../../actionCreators';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import '../AddNewPost/AddNewPost.scss';

const EditPost = ({posts, editPost}) => {

    const { id } = useParams();
    const post = useSelector(state => state.posts.find(i => i.id==id));

    const [title, setTitle] = React.useState(post?.title);
    const [body, setBody] = React.useState(post?.body);
    const [error, setError] = React.useState();

    const navigate = useNavigate();

    const handleEditPost = () => {
        if(title && body){
            setError(undefined);
            const post1 = {
                id: parseInt(id),
                title: title,
                body: body
            }
            console.log(post1);
            editPost(post1);
            navigate(`/post/${id}`);
        } else {
            setError('Please fill all the fields');
        }
    }

    return (
        <div style={{ padding:'16px' }}>
        <div className="form">
            <p className="title">Edit Post</p>
            <textarea className="textarea" placeholder="Blog Title" value={title} required onChange={(e) => setTitle(e.target.value)} />
            <textarea className="textarea" placeholder="Blog Body" value={body} required onChange={(e) => setBody(e.target.value)}  />
            {error && <p className="error">{error}</p>}
            <button className="btn" onClick={handleEditPost}>UPDATE</button>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { 
        posts: state.posts
    }
};

export default connect(mapStateToProps, { editPost })(EditPost);