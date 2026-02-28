import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
});

// ───── USERS ─────
export const getUsers    = ()     => api.get('/users').then(r => r.data);
export const getUserById = (id)   => api.get(`/users/${id}`).then(r => r.data);

// ───── POSTS ─────
export const getPosts         = ()     => api.get('/posts').then(r => r.data);
export const getPostsByUserId = (uid)  => api.get(`/posts?userId=${uid}`).then(r => r.data);
export const createPost       = (post) => api.post('/posts', post).then(r => r.data);
export const updatePost       = (post) => api.put(`/posts/${post.id}`, post).then(r => r.data);
export const deletePost       = (id)   => api.delete(`/posts/${id}`).then(r => r.data);

// ───── COMMENTS ─────
export const getCommentsByPostId = (pid) => api.get(`/comments?postId=${pid}`).then(r => r.data);