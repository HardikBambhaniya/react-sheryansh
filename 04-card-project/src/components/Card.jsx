import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <img src= {props.img}  />
          <button>
            Save <Bookmark size={12} />
          </button>
        </div>
        
        <div className="center">
          <h3>{props.orgName} <span>{props.time} days ago</span></h3>
          <h2>{props.role}</h2>
          <div>
            <h4>{props.jobType}</h4>
            <h4>
            {props.experience}
            </h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            
              <h3>${props.salary}/hr</h3>
              <p>{props.location}</p>
            
           
          </div>
           <button>Apply Now</button>
        </div>

       </div>
  )
}

export default Card