import React from 'react'

const TopWidget = ({ data }) => {
  /* Destructure Data Prop */
  const {
    liveData: { matchDetails },
    meta: { competition },
    contestant,
  } = data;

  console.log(matchDetails);
  return (
    <div>TopWidget</div>
  )
}

export default TopWidget