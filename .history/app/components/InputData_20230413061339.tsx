"use client"
import React, {  useState } from 'react'
import ImageP from './ImageP'
import FileSaver from 'file-saver';
import Inputt from './Inputt';
import axios from "axios";
import  { useRouter } from 'next/navigation';

function InputData() {

    const [title, setTitle] = useState('')
    const [tag, setTag] = useState('')
    const [description, setDescription] = useState('')
    const [ isLoading, setIsLoading] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const router = useRouter()
    
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      setDescription("")
      setTitle("")
      setTag("")
      try {
        const { data } = await axios.post('/api/openai', 
          {
            description: description,
          },
          {
            headers: { "Content-Type": "application/json"},
          }
        )
        setImageUrl(data.imageUrl)
        
      } catch (error) {
        
      }
      
      
    }
    const handleClick = () => {
      FileSaver.saveAs(imageUrl, imageUrl);
    }
 
    const shareImage = async () => {
        try {
            const { data } = await axios.post(`/api/sharepost`, {
				title: title,
				imageUrl: imageUrl,
				tag: tag,
			});
        } catch (error) {
            
        }
        router.push("/share")
    }
    
  return (
    <div className="flex flex-col  bg-zinc-600  max-w-5xl mx-auto">
      <Inputt
        handleSubmit={handleSubmit}
        tag={tag}
        setTag={setTag}
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        isLoading={isLoading}
      />
        
      <ImageP   imageUrl={ imageUrl } isLoading={ isLoading } />
      <div className="flex items-center justify-center text-xl gap-40 mt-3 p-3 ">
          <button onClick={shareImage} className='bg-blue-500 p-1 hover:bg-blue-900 mb-3'   >Share</button>
          <button onClick={handleClick} className="bg-green-500 p-1 hover:bg-green-900 mb-3" >download</button>
        </div>
    </div>
  )
}

export default InputData