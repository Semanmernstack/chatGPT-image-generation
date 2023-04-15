import React from 'react'

type Props = {
    tag: string;
    setTag: React.Dispatch<React.SetStateAction<string>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>
    description: string;
    setDescription: React.Dispatch<React.SetStateAction<string>>;
    isLoading: boolean;
    handleSubmit:  (e: React.FormEvent<HTMLFormElement>) => void;
}

function Inputt({ handleSubmit, tag, setTag, title, setTitle, description, setDescription, isLoading }: Props ) {
  return (
    <div>
        <div className='bg-zinc-900 flex flex-col'>
            <form onSubmit={handleSubmit} className="flex   flex-col p-5 gap-5 items-center  justify-center" >
                <div className='flex space-x-4 items-center  '>
                    <input className="p-1 rounded-md flex-1"  onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title...' value={title} />
                    <input className="p-1  rounded-md flex-1"  onChange={(e) => setTag(e.target.value)} type="text" placeholder='tag...' value={tag} />
                </div>
                <div className='flex-1'>
                    <input className="flex-1 p-2 rounded-md" onChange={(e) => setDescription(e.target.value)} type="text" placeholder='description' value={description}/>
                </div>
                <button className='flex-1 border p-1 rounded-full text-white' type='submit'>
                    {isLoading ? "Generating..." : "Generate"}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Inputt