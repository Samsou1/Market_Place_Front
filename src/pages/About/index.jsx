import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      <div className='about-story'>
        
        <div className="about-story-left">
          <h2>Story</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas ad architecto maxime aliquid tenetur, sint commodi repudiandae omnis a consectetur magnam, veniam velit? Obcaecati incidunt perspiciatis eaque autem vero. Iure?</p>
        </div>
        <div className="about-story-right">
          <img src='https://previews.123rf.com/images/pogorelovaolga/pogorelovaolga1906/pogorelovaolga190600030/124405403-sea-crab-entangled-in-plastic-on-the-background-of-landfills-and-garbage-bags-on-the-beach-polluted-.jpg' alt='story picture' />
        </div>
      </div>

      <div className='about-goal'>
        <div className="about-goal-left">
          <img src="https://viviankirkfield.files.wordpress.com/2021/02/big-beach-cleanup.jpg" alt="goal picture" />
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