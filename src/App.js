import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Navbar from "./components/navbar";
import {Homepage} from "./pages";

import './styles/styles.css'
import './styles/navbar.css'
import './styles/searchform.css'
import './styles/homepage.css'

const App = () => {
    return(
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Homepage/>}/>
                {/* <Route exact path="/repo/:id" element={<Repo/>}/> */}
            </Routes>
            
        </>
    );
    
}
export default App;