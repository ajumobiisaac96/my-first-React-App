import React from 'react'
import '../UserProfileCard/UserProfileCard.css'
import Profile_icon from '../assests/Elon_Musk_Royal_Society_(crop2).jpg'

const UserProfileCard = () => {
  return (
    <div>
      <div className="upc">
        <div className="gradiant"></div>
        <div className="profile_down">
            <img src={Profile_icon} alt="" />
            <div className="Profile_title">Elon Musk</div>
            <div className="profile_description">
                I am a founder, chairman and Chief Exectuive officer
            </div>
            <div className="profile_button"><a href="https://gmail.com">Contact Me</a></div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
