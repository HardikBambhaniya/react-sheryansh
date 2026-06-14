import React from 'react'
import Card from './components/Card'

const App = () => {

  const User = [
    {
      img: 'https://imgs.search.brave.com/0Ec6FtBVVNRzoek1eZO-7oR3jIQoxSKYI6rHO5shr5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn',
      orgName: 'Amazon',
      time: 5,
      role: 'Frontend developer',
      jobType: 'Remote',
      experience: 'Senior',
      salary: 120,
      location: 'Mumbai, India'
    },
    {
      img: 'https://imgs.search.brave.com/0Ec6FtBVVNRzoek1eZO-7oR3jIQoxSKYI6rHO5shr5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn',
      orgName: 'Amazon',
      time: 9,
      role: 'devops developer',
      jobType: 'hybrid',
      experience: 'Senior',
      salary: 110,
      location: 'bengluru, India'
    },
    {
      img: 'https://imgs.search.brave.com/0Ec6FtBVVNRzoek1eZO-7oR3jIQoxSKYI6rHO5shr5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8w/MS8xMC9hbWF6b24t/bG9nby12ZWN0b3It/NDY4NjAxMTAuanBn',
      orgName: 'Amazon',
      time: 7,
      role: 'Backend developer',
      jobType: 'onsite',
      experience: 'mid-level',
      salary: 100,
      location: 'pune, India'
    },
  ]

  return (
    <div className='parent'>
      {User.map(function(elem){
        return <Card img={elem.img}
        orgName = {elem.orgName}
        time = {elem.time}
        role = {elem.role}
        jobType = {elem.jobType}
        experience = {elem.experience}
        salary = {elem.salary}
        location = {elem.location}/>
      })}
    </div>
  )
}

export default App