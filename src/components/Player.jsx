import React from 'react'
import { songsData } from '../assets/assets'
import { assets } from '../assets/assets'

const Player = () => {
  return (
    <>
      <div className='h-[10%] bg-black flex text-white px-4 justify-between items-center'>
      <div className='hidden lg:flex items-center gap-4'>
      <img className='w-12' src={songsData[2].image} alt="" />
            <div>
                <p>{songsData[2].name}</p>
                <p>{songsData[2].desc.slice(0,12)}</p>
            </div>
        </div>
        <div className='flex flex-col items-center gap-1 m-auto ' >
            <div className='flex gap-4'>
            <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        
        <div className='flex items-center gap-5'>
            <p>1:00</p>
            <div className='w-[60vh] max-w-[500px] rounded-full bg-gray-300 cursor-pointer'>
                <hr className='h-1 w-10 rounded-full border-none bg-green-900' />
            </div>
            <p>3:00</p>
        </div>
        </div>


        <div className='hidden lg:flex items-center gap-2 opacity-75'>
            <img className='w-4' src={assets.plays_icon} alt="" />
            <img className='w-4' src={assets.mic_icon} alt="" />
            <img className='w-4' src={assets.queue_icon} alt="" />
            <img className='w-4' src={assets.speaker_icon} alt="" />
            <img className='w-4' src={assets.volume_icon} alt="" />
            <div className='w-20 h-1 bg-slate-50 rounded'></div>
            <img className='w-4' src={assets.mini_player_icon} alt="" />
            <img className='w-4' src={assets.zoom_icon} alt="" />
        </div>

        

      </div>
      </>
  )
}

export default Player