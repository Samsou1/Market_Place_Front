import React from 'react';
import new_keys from '../../images/keys.avif';

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      
      <div className='card about-goal'>
        <div className="about-goal-left">
          <img src={new_keys} alt="keys with house key ring" />
        </div>
        <div className="about-goal-right">
          <h2 className='about-goal-title'>Our goal</h2>
          <p className='about-content'>Real estate is an investment that helps you generate income. By owning real estate, you can build up a wealth. Although buying and selling real estate projects involves risk, it is exciting and can be profitable. Having a real estate agent to help you navigate the process makes it easier. They can help you find the ideal locations, negotiate the best deals and manage your properties. Essentially, they can save you time and money while providing exceptional customer service. </p>
          <p className='about-content'>Real estate projects are excellent investments that help develop your personality. Owning a property can help you establish an income and help you make financial decisions. It can also help you build an emergency fund and pay your bills. Plus, it can improve your financial health by protecting you from sudden inflation or economic downturns. In addition, real estate can be an asset to sell in times of economic growth. This allows you to take advantage of rising property prices and investment opportunities. </p>
        </div>
      </div>

      <div className='about-team'>
        <h2>Our team</h2>
        <div className='team-cards'>
          <div className='card member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='card member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='card member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='card member-card'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, modi?</p>
            <img src='https://cdn2.iconfinder.com/data/icons/app-ui-solid/64/profile_user_avatar_people_app_website-512.png' alt='member-picture'/>
          </div>
          <div className='card member-card'>
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