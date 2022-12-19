import React from 'react';
import '../styles/Map.css';
import { AppContext } from './AppContext';

export function Map() {
  const { latitude, longitude } = React.useContext(AppContext);

  return (
    <div className="Map">
      <h2 className='Map__title'>Location</h2>
      <div className="Map__content">
        <iframe 
          title="location"
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15693.454675882373!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1671312679008!5m2!1ses-419!2sco`}          
          height={350}
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}