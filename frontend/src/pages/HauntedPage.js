
import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Allstyles/Buttonspage.css';
// import '../Data/HauntedHouse';

// import HauntedHouse from '../Data/HauntedHouse';


// src/HauntedPage.js


function HauntedPage() {
    return (
        <div className="haunted-page">
            <div className="places-buttons">
                <Link to="/HauntedHouse" className="places-button">./Haunted House</Link>
                <Link to="/HauntedMansion" className="places-button">./Haunted Mansion</Link>
                <Link to="/GhostTown" className="places-button">./Ghost Town</Link>
                <Link to="/CreepyForest" className="places-button">./Creepy Forest</Link>
                <Link to="/AbandonedHospital" className="places-button">./Abandoned Hospital</Link>
                <Link to="/OldGraveyard" className="places-button">./Old Graveyard</Link>
                <Link to="/DarkSwamp" className="places-button">./Dark Swamp</Link>
                <Link to="/CursedCave" className="places-button">./Cursed Cave</Link>
                <Link to="/PhantomCircus" className="places-button">./Phantom Circus</Link>
                <Link to="/SpookyAlley" className="places-button">./Spooky Alley</Link>
        {/* <Router>
            <Routes>
                <Route path="/" element={<HauntedPage />} />
                <Route path="/HauntedHouse"  className =  "places-button" element={<HauntedHouse />} />
            </Routes>
        </Router> */}
            </div>
        </div>
    );
}

export default HauntedPage;
