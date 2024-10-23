import React from 'react';
import pic from '../../assets/img/pic.png';
import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            <h3>Name: Tatsunori Kato</h3>
            <img className='image' src={pic} alt="Description of the image" />
            <span className="description">
                I am a student of computer science and software development innovation (CSI) at Sripatum University.
            </span>
            <span>
                <p>Some additional information here.</p>
            </span>
        </div>
    );
}

export default Home;
