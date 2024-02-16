
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';

import HomePages from './customer/Pages/HomePage/HomePages';
import Home_mainNavigation from './Home_MainNavigation/Home_MainNavigation';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import ContactUs from './Home_MainNavigation/ContactUs';
import Home from './Home_MainNavigation/Home';
import ABout from './Home_MainNavigation/ABout';
import OurStore from './Home_MainNavigation/OurStore';
import Blog from './Home_MainNavigation/Blog';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import SingleBlog from './pages/SingleBlog';


function App() {
  return (
    <>
      <div>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home_mainNavigation/>}>
    <Route index element={<Home/>} />
    <Route path="about" element={<ABout/>}/>
    <Route path="store" element={<OurStore/>}/>
    <Route path="Blogs"element={<Blog/>}/>
    <Route path="Blogs/:id"element={<SingleBlog/>}/>
     <Route path="contact"element={<ContactUs/>}/>
    <Route path="Login"element={<Login/>}/>
    <Route path="SignUp"element={ <SignUp/>}/>
    <Route path="forgotpassword"element={ <ForgotPassword/>}/>
    

  </Route>
 </Routes>

 </BrowserRouter>
      
 
 
      
      
    </div>
    
    
    </>
  );
}

export default App;
