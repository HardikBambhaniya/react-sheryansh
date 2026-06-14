import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent' >
      <Card user ='Hardik' age = {18} img = 'https://images.unsplash.com/photo-1780324008116-94a743271848?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
      <Card user = 'dharmik' age = {19} img = 'https://images.unsplash.com/photo-1779976739307-ed58ed929109?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' />
    </div>
  )
}

export default App