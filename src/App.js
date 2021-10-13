import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './Views/SignIn/SignIn'
import ForgotPassword from './Views/ForgotPassword/ForgotPassword';
import Layout from './Components/Layout/Layout'
import AboutUs from './Views/AboutUs/AboutUs';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Views/ContactUs/ContactUs';
import OurBlog from './Views/OurBlog/OurBlog';
import TandC from './Views/TandC/TandC';
import Home from './Views/Home/home'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

         <Route exact path='/SignIn'>
            <SignIn />
          </Route> 
          <Route exact path='/ForgotPassword'>
            <ForgotPassword />
          </Route> 
          <Navbar />
          
  
        </Switch>
        <Switch>
        <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/AboutUs'>
                <AboutUs />
            </Route>
            <Route exact path='/ContactUs'>
                <ContactUs />
            </Route>
            <Route exact path='/OurBlog'>
                <OurBlog />
            </Route>
            <Route exact path='/TandC'>
                <TandC />
            </Route>
             
              </Switch>
              
              <Footer/>
              
            
        
      </BrowserRouter>
     
    </div>
  );
}

export default App;
