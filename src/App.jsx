import React from 'react'
import Player from './components/player'
import Sidebar from './components/Sidebar'
import Display from './components/Display'


const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio preload='auto'></audio>
    </div>
  )
}

export default App