import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddNewPost from './components/AddNewPost';
import EditPost from './components/EditPost';
import Header from './components/Header';
import LikedPosts from './components/LikedPosts';
import PostDetails from './components/PostDetails';
import PostList from './components/PostList';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<PostList />} />
        <Route path="/liked" element={<LikedPosts />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path="/edit_post/:id" element={<EditPost />} />
        <Route path="add_new" element={<AddNewPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
