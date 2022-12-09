import React from "react";
import Header from "./Header";
import Footer from './Footer';
import Navbar from "./Navbar";
import LeftPanel from "./LeftPanel";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <LeftPanel />
            <Footer />
        </div>
    )
}
 
export default MainPage;