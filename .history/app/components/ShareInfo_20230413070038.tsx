import React from 'react'

function ShareInfo({ posts }: any) {
  return (
    <div>
        <h1>{posts.title}</h1>
        <h1>{posts.tag}</h1>
    </div>
  )
}

export default ShareInfo