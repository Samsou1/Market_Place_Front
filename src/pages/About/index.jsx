import React from 'react';
import new_keys from '../../images/keys.avif';

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>

      <div className='about-goal'>
        <div className="about-goal-left">
          <img src={new_keys} alt="keys with house key ring" />
        </div>
        <div className="about-goal-right">
          <h2>Goal</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sit nesciunt porro, eaque a consectetur accusamus ab cum ullam eius veniam hic quo libero error distinctio commodi voluptatibus, magnam expedita.</p>
        </div>
      </div>

      <div className='about-team'>
        <h2>Our team</h2>
        <div className='team-cards'>
          <div className='member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About