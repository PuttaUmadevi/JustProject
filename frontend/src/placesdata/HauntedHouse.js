import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Allstyles/PLaces.css/HContent.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function HauntedHouse() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='HauntedOutDiv'>
        <div className='HauntedContent'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/11.png"  // Replace with actual image path
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='textOnSlide' style={{color: 'black',fontWeight:'bold' , backgroundColor: '#eb3850' }}>Bhangarh Fort, Rajasthan </h3>
          <p className='textOnSlide' style={{color: 'black', fontWeight: 'bold', backgroundColor: '#4284ed', fontSize: 28}}>Bhangarh Fort, a majestic 16th-century monument nestled amidst the Aravali hills of Rajasthan, India, stands as a testament to both architectural grandeur and enigmatic folklore. Once a thriving city, it now lies abandoned, its ruins cloaked in an aura of mystery and the supernatural.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/path/to/second-image.jpg"  
        />
        <Carousel.Caption>
        <h3 className='textOnSlide' style={{color: 'black',fontWeight:'bold' , backgroundColor: '#eb3850' }}>Bhangarh Fort, Rajasthan </h3>
        <p className='textOnSlide' style={{color: 'black', fontWeight: 'bold', backgroundColor: '#4284ed', fontSize: 28}}>The fort's haunted history is as intriguing as its architectural splendor. One popular legend attributes the curse to Baba Balu Nath, a revered sage whose hermitage lay near the fort. He granted permission for the fort's construction on the condition that its shadow never fell upon his abode. However, a later addition to the fort violated this condition, triggering a curse that condemned the fort to eternal desolation. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../"  // Replace with actual image path
        //   alt="Third slide"
        />
        <Carousel.Caption>
        <h3 className='textOnSlide' style={{color: 'black',fontWeight:'bold' , backgroundColor: '#eb3850' }}>Bhangarh Fort, Rajasthan </h3>
        <p style={{color: 'black', fontWeight: 'bold', backgroundColor: '#4284ed', fontSize: 28}}> Another tale involves a vengeful sorcerer whose advances were rejected by Princess Ratnavati, leading to tragic consequences. The fort's eerie silence, inexplicable occurrences, and the mysterious disappearance of an entire village have solidified its reputation as one of India's most haunted sites.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <Link to="/Places">
        <Button variant="danger" className='returnButton'>Go-To-Places</Button>
      </Link>
    </div>
  );
}

export default HauntedHouse;
