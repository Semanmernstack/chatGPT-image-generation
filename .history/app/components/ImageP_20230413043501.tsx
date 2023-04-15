import React, { useState } from 'react'
import Loading from './Loading'

type Props = {
  imageUrl: string
  isLoading: boolean
}


function ImageP({ imageUrl, isLoading }: Props) {
    
  return (
    <div className='relative p-5 flex flex-col items-center justify-center'>
     	       
        
      
          <div className="relative h-[512px] w-[512px]">
            <img src="https://cdn.pixabay.com/photo/2023/03/31/18/44/piano-7890735__340.jpg" alt="profile" />
          </div>
          
           
    </div>
  )
}

export default ImageP