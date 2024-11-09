import React from "react";
import '../Allstyles/styles.css'; // Make sure to link to your CSS file
import './CreepyHeader.js';
import CreepyHeader from "./CreepyHeader.js";

function HHeader() {
  const handleClick = (event) => {
    const link = event.target;
    link.classList.add("active");
    
    // Remove the class after the animation is complete (1.2s for 3 flickers)
    setTimeout(() => {
      link.classList.remove("active");
    }, 1200);
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="AddHaunt" onClick={handleClick}>ADD YOUR HAUNT</a></li>
            <li><a href="ContactUs" onClick={handleClick}>CONTACT US</a></li>
            <li><a href="signin" onClick={handleClick}>LOGIN</a></li>
            <li><a href="Register" onClick={handleClick}>REGISTER</a></li>
          </ul>
        </nav>
        {/* <h1 style={{ textAlign: 'center', fontSize: '4pc', fontFamily: 'Exquisite Corpse'}}>Haunt Explorer</h1> */}
        <CreepyHeader>Haunt Explore</CreepyHeader>
      </header>
      <nav className="main-nav">
        <ul>
          <li>HAUNT EXPLORER</li>
          <li><a href="/" onClick={handleClick}>HOME</a></li>
          <li><a href="places" onClick={handleClick}>HAUNTED PLACES</a></li>
          <li><a href="movies" onClick={handleClick}>HORROR MOVIES</a></li>
          <li><a href="books" onClick={handleClick}>HORROR BOOKS</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HHeader;
