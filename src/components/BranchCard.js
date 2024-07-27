import React from 'react'
import "./BranchCard.css"

const BranchCard = ({data}) => {
    const{name, address, hours:{mondayToFriday,saturday}, additionalInfo } = data;
  return (
    <div className='branch-card'>
      <div className='branch-card-div'>
        <p className='branch-card-p'>{name}</p>
        <p className='branch-card-p'>{address}</p>
        <p className='branch-card-p'>{additionalInfo}</p>
      </div>
      <div className='branch-card-div not-black'>
        <p className='branch-card-hours'>სამუშაო საათები</p>
        <p className='branch-card-hours'>{mondayToFriday}</p>
        <p className='branch-card-hours'>{saturday}</p>
      </div>
    </div>
  )
}

export default BranchCard
