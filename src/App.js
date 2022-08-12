import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import PostPage from './pages/PostPage';
import WritePage from './pages/WritePage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<PostListPage />} />
      <Route path='/@:username' element={<PostListPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/write' element={<WritePage />} />
      <Route path='/@:username/:postId' element={<PostPage />} />
    </Routes>
  );
}

export default App;