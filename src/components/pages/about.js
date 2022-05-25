import React from 'react';

export default function About() {
  return (

    <div className='container-fluid about-text mb-5' >
      <br></br><br></br><br></br><br></br>
      <div className='row' >
        <div className='col-lg-6 col-sm-12 text-center'>
          <img className='img-fluid p-3 rounded mb-3' src={require("../../images/me.jpg")} alt="christian"></img>
        </div >
        <div className='col-lg-6 col-sm-12' >
          <h1 className='h1 text-center mt-5'>About Me</h1>
          <p className='about-p text-center'>
          My name is Christian Le and I am currently a taking a 
        full-stack web development coding bootcamp at UCSD. 
        I have an ever-growing passion for computers and coding.
        I have worked in the biotech and marketing industry but
        however, I want to do something related to coding now. 
          </p>
        </div >
      </div >
    </div >
  );
}