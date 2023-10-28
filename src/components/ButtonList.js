import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const butons = ["ALL", "Movies", "Web Series", "Cricket", "News", "Songs", "Live"]
  return (
    <div className='d-flex'>
      {butons.map((eachButton) => {
        return (
          <>
            <Button name={eachButton}/>
          </>
        )
      })}
    </div>
  )
}

export default ButtonList