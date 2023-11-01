import React from 'react'

const HomeCard = ({item:{id,cover,name,rating,time,desc,starring,genres,tags,video}}) => {
  return (
    <>
    <div className="box">
      <div className="coverImage">

        <img src={cover} alt="" />
      </div>
    </div>
    </>
  )
}

export default HomeCard