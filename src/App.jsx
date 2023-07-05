import React from "react";
import Logo from './images/airbnb.svg';
import Group77 from './images/Group77.png';
import Card from './Card';
import data from './data';
import './card-style.css'

function App() {
  const getCard = data.map(item => (
    <Card 
      key={item.id}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  ));

  return (
    <main>
      <div className="nav">
        <img className='logo' src={Logo} alt="logo" />
      </div>
      <div>
        <img className='group77' src={Group77} alt="group77" />
        <div className='data'>
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
          </p>
        </div>
      </div>
      <div className="card-section">
      {getCard}

      </div>
    </main>
  );
}

export default App;
