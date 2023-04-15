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
            <img src={imageUrl} alt="profile" />
          </div>
          
           
    </div>
  )
}

export default ImageP