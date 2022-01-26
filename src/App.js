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
import NotFound from './components/NotFound/NotFound';

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
            {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/dashboard" element={<Book />} />
              <Route path="/dashboard/bookinglist" element={<AllBookingList />} />
              <Route path="/dashboard/bookinglist/:id" element={<BookingList />} />
              <Route path="/dashboard/review" element={<Review />} />
              <Route path="/dashboard/orderlist" element={<AdminRoute><OrderList /></AdminRoute>} />
              <Route path="/dashboard/addservice" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="/dashboard/makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="/dashboard/manageservice" element={<AdminRoute><ManageService /></AdminRoute>} />
            </Route> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
