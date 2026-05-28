import React from 'react'
import Card from './componets/Card'
const App = () => {
  return (
    <div className='parentcard'>
      {/* {card()} */}
      <Card user='sagar'age={21}/>
      <Card user='sumit' age={20}/>
      <Card user='Rohit' age={19}/>
      
    </div>
  )
}

export default App

