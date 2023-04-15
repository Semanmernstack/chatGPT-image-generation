import { prisma } from '@/prisma/prisma'
import React from 'react'

async function sharePost() {
    const posts = await prisma.post.findMany()
    console.log(posts)
    return (
        <div>
            ghhjjjjkk
        </div>
    )
}



export default sharePost