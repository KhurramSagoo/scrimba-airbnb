import React from 'react'
import './card-style.css'

const Card = (props) => {
  let badgeText
  if(props.openSpots===0){
    badgeText="SOLD OUT"}
    else if(props.location==="Online"){
    badgeText="ONLINE"}
    else{
      badgeText=''
    }
  // console.log(props.openSpots)
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
    <img src={`../images/${props.img}`} className="card--image" />
    <div className="card--stats">
        <img src="../src/images/star.svg" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
    </div>
    <p className='card--title'>{props.title}</p>
    <p><span className="card--price">From ${props.price}</span> / person</p>
</div>
  )
}

export default Card