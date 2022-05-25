import React from 'react';

export default function Portfolio() {
  return (

    <div className="container-fluid pt-5">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://nailloungeoflajolla.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../images/lajolla.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title">Project 3: Nail Lounge of La Jolla</h5>
                <p className="card-text" >A mock website I helped develop for a small business owner in San Diego.</p >
                <p className="card-text-0" >Semantic UI/MongoDB/React</p >
                <a href="https://github.com/Nail-Lounge-of-La-Jolla/nail-lounge" target="_blank" rel="noopener noreferrer"><i
                  style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="http://selectnutrition.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../images/select.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title">Select Nutrition</h5>
                <p className="card-text" >A website for a nutrtional cafe developed for a small business owner in San Diego.</p >
                <p className="card-text-0" >CSS/JavaScript/MySQL/MVC</p >
                <a href="https://github.com/Project2CMJ/project2CMJ.git" target="_blank" rel="noopener noreferrer"><i
                   style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >
        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://learn-about-covid-19.github.io/know-about-covid-19/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../images/covid19.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Covid 19 Travel Restrictions Tracker</h5>
                <p className="card-text" >A website that allows you to see the covid-19 guidelines for any country's data available.</p >
                <p className="card-text-0" >HTML/CSS/JavaScript</p >
                <a href="https://github.com/Learn-About-Covid-19/know-about-covid-19" target="_blank" rel="noopener noreferrer"><i
                   style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >
        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://christianle21.github.io/hows-the-weather/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../images/weather.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Weather App</h5>
                <p className="card-text" >Allows you to check the forecast for whatever city you would like to view in the U.S. Displays the weather for the searched city for a 5-day forecast.</p >
                <p className="card-text-0" >HTML/CSS/JavaScript/OpenweatherAPIs</p >
                <a href="https://github.com/christianle21/hows-the-weather" target="_blank" rel="noopener noreferrer"><i
                   style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://christianle21.github.io/the-only-coding-quiz-worth-trying/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../images/quiz.png")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Code Quiz</h5>
                <p className="card-text" >A quiz based on simple coding knowledge. Tracks your score and also has a scoreboard to see how well you did.</p >
                <p className="card-text-0" >HTML/CSS/JavaScript</p >
                <a href="https://github.com/christianle21/the-only-coding-quiz-worth-trying" target="_blank" rel="noopener noreferrer"><i
                   style={{ fontSize: "30px" }}></i></a>
              </div >
            </div >
          </a>
        </div >

        <div className="col-lg-4 col-md-6 col-sm-12 small-cards mt-3 p-3" >
          <a href="https://christianle21.github.io/whats-the-password/" target="_blank" rel="noopener noreferrer">
            <div className="card" >
              <img src={require("../../images/password.jpg")}
                alt="minibot" className="image"></img>
              <div className="card-body text-center">
                <h5 className="card-title ">Password Generator</h5>
                <p className="card-text" >Generates a password for you with certain criterias to make your new password secure.</p >
                <p className="card-text-0" >HTML/CSS/JavaScript</p >
                <a href="https://github.com/christianle21/whats-the-password" target="_blank" rel="noopener noreferrer"><i
                   style={{ fontSize: "30px" }}></i></a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}   