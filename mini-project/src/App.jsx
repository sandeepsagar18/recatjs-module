import React from 'react'
import Card from './components/Card'
const App = () => {
  const jobOpenings = [
  {
    id: 1,
    company: "Amazon",
    logo: "https://i.pinimg.com/736x/b7/18/e4/b718e41616355ec689f5a55e8b3ca990.jpg",
    posted: "2 days ago",
    role: "Senior Frontend Developer",
    type: "Full Time",
    salary: "$55/hr",
    location: "Mumbai, India",
  },
  {
    id: 2,
    company: "Apple",
    logo: "https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg",
    posted: "5 days ago",
    role: "UI/UX Designer",
    type: "Full Time",
    salary: "$60/hr",
    location: "Bengaluru, India",
  },
  {
    id: 3,
    company: "Google",
    logo: "https://i.pinimg.com/736x/39/21/6d/39216d73519bca962bd4a01f3e8f4a4b.jpg",
    posted: "1 day ago",
    role: "Software Engineer",
    type: "Full Time",
    salary: "$70/hr",
    location: "Hyderabad, India",
  },
  {
    id: 4,
    company: "Meta",
    logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
    posted: "3 days ago",
    role: "React Developer",
    type: "Part Time",
    salary: "$45/hr",
    location: "Delhi, India",
  },
  {
    id: 5,
    company: "Netflix",
    logo: "https://i.pinimg.com/736x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
    posted: "7 days ago",
    role: "Backend Developer",
    type: "Full Time",
    salary: "$75/hr",
    location: "Pune, India",
  },
  {
    id: 6,
    company: "Microsoft",
    logo: "https://i.pinimg.com/736x/91/92/1c/91921cec4f8a8cbe3d09e596e0659d81.jpg",
    posted: "4 days ago",
    role: "Cloud Engineer",
    type: "Full Time",
    salary: "$65/hr",
    location: "Noida, India",
  },
  {
    id: 7,
    company: "Spotify",
    logo: "https://i.pinimg.com/736x/05/f4/9d/05f49d34f50f55583d7fdcc61ea18326.jpg",
    posted: "6 days ago",
    role: "System Design",
    type: "Part Time",
    salary: "$40/hr",
    location: "Chennai, India",
  },
  {
    id: 8,
    company: "IBM",
    logo: "https://i.pinimg.com/736x/6f/1c/ad/6f1cad21097bfb7fe1d8580953ef161c.jpg",
    posted: "1 week ago",
    role: "Machine Learning Engineer",
    type: "Full Time",
    salary: "$85/hr",
    location: "Mumbai, India",
  }
];

console.log(jobOpenings);

  
  return (


    <div className='parent'>
      {jobOpenings.map(function(sandy){
       return  <Card company={sandy.company} post={sandy.posted} salary={sandy.salary} location={sandy.location} type={sandy.type}
       role={sandy.role}
       logo={sandy.logo}/>
      })}
    
      
    </div>
  )
}

export default App
