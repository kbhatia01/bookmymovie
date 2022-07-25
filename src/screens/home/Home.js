import React from "react";
import Header from "../../common/header/Header";
import "./Home.css";

export default function Home(){
   return(
    <div className="home-container">
        <Header />
        <div className="home-content">
            <div className="home-content-text">
                <h1>Welcome to Movie Booking System</h1>
                <p>
                    This is a movie booking system that allows you to book tickets for movies.
                    You can book tickets for movies in your city.
                </p>
            </div>
            
        </div>
    </div>
   );
}