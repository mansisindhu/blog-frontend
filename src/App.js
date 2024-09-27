import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Blogs from './components/Blogs';
import CreateBlogFrom from './components/CreateBlogFrom';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/create-blog' element={<CreateBlogFrom />} />
      </Routes>
    </div>
  );
}

export default App;
