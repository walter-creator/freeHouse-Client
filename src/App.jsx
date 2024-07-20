// import React from "react";
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from "./Pages/SignUp";
import SearchResult from "./Pages/SearchResult";
import Discussion from "./Pages/Discussion";
import Home from "./Pages/Home";
import Publier from "./Pages/Publier";
import PropertyComponent from "./acceuil/PropertyComponent";

function App() {
  const isAuthenticated = !!localStorage.getItem('token');


  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publier" element={isAuthenticated ? <Publier /> : <Navigate to="/signIn" />} />
            <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/signIn" />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="/chat" element={isAuthenticated ? <Discussion /> : <Navigate to="/signIn" />} />
            <Route path="/detail/:propertyId" element={<PropertyComponent />} />
          </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
