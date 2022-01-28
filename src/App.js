import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AuthProvider from './Context/Authprovider';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './Redirects/PrivateRoute';
import AdminRoute from './Redirects/AdminRoute';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddBlog from './components/Dashboard/AddBlog/AddBlog';
import SingleBlog from './components/SingleBlog/SingleBlog';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageBlog from './components/Dashboard/ManageBlog/ManageBlog';
import OneBlog from './components/Dashboard/Oneblog/OneBlog';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/singleBlog/:blogId" element={<SingleBlog />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard/" element={<AddReview />} />
              <Route path="/dashboard/oneBlog/:id" element={<OneBlog />} />
              <Route path="/dashboard/addblog" element={<AdminRoute><AddBlog /></AdminRoute>} />
              <Route path="/dashboard/manageblog" element={<AdminRoute><ManageBlog /></AdminRoute>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
