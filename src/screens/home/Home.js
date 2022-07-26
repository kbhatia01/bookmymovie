import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";
import Movies from "./Movies";


export default function Home(){
   return(
    <div className="home-container">
        <Header />
        <div className="home-content">
            <div className="home-content-text">
                <Movies />
            </div>
            
        </div>
    </div>
   );
}