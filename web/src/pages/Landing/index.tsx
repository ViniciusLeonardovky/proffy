import React from 'react';
import { Link } from 'react-router-dom';

import LogoImage from '../../assets/images/logo.svg';
import LandingImage from '../../assets/images/landing.svg';
import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
  return (
    <div id='page-landing'>
      <div id='page-landing-content' className='container'>
        <div className='logo-container'>
          <img src={LogoImage} alt='Proffy' />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={LandingImage}
          alt='Plataforma de estudos'
          className='hero-image'
        />
        <div className='buttons-container'>
          <Link to='/study' className='study'>
            <img src={StudyIcon} alt='Estudar' />
            Estudar
          </Link>
          <Link to='/give-class' className='give-classes'>
            <img src={GiveClassesIcon} alt='Dar aulas' />
            Dar aulas
          </Link>
        </div>

        <span className='total-connections'>
          Total de 200 conexões realizadas{' '}
          <img src={PurpleHeartIcon} alt='Conexões' />
        </span>
      </div>
    </div>
  );
}

export default Landing;
