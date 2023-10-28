import React from 'react'
import UserIcon from "../images/icons8-person-24.png"
 
const Comment = ({data}) => {
    const {name, text, replies} = data;

  return (
    <div className='pb-3'>
          <div className='align-items-center bg-body-secondary d-flex p-2' style={{width:"67%"}}>
              <img alt="user" src={UserIcon} className="me-3"/>
              <div>
                  <p className='fw-lighter mb-0 fs-6'>{name}</p>
                  <p className='fw-lighter mb-0 fs-6'> {text}</p>
              </div>
          </div>

    </div>
  )
}

export default Comment