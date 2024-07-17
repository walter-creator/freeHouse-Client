// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from "./Pages/SignUp";
import SearchResult from "./Pages/SearchResult";
import Discussion from "./Pages/Discussion";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Publier from "./Pages/Publier";
import AppartementForm from "./components/AppartementForm";

function App() {

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publier" element={<Publier />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="/chat" element={<Discussion />} />
            <Route path="/detail" element={<Details />} />
            <Route path="/form" element={<AppartementForm />} />
          </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
