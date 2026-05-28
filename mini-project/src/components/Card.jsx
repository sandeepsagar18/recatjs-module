import React from 'react'
import {Bookmark} from 'lucide-react'
const Card = (props) => {
console.log(props.company)


  return (
    <>
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>Save <Bookmark size={15} />

          </button>
        </div>
        <div className="center">
          <h3>{props.company}<span>
            {props.post}</span></h3>
          <h2> {props.role
            }</h2>
           
          <h4>
            {props.type}
          </h4>
          {/* <h4> {props.type}</h4> */}
        
        </div>
       
    
        <div className="bottom">
          <div className='hour'><h3>{props.salary}</h3>
          <h4>{props.location
            }</h4></div>
          <button>Apply now</button>
        </div>

        </div>  
    </> 
    
  )
}

export default Card
