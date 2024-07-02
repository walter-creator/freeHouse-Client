import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SignUp from "./Pages/SignUp";
import SearchResult from "./Pages/SearchResult";
import Discussion from "./Pages/Discussion";
import Details from "./Pages/Details";

function App() {


  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/searchResult" element={<SearchResult />} />
            <Route path="/chat" element={<Discussion />} />
            <Route path="/detail" element={<Details />} />
          </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App;
