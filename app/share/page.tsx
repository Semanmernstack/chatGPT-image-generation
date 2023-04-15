import { prisma } from '@/prisma/prisma'
import React from 'react'
import ShareInfo from '../components/ShareInfo'

async function sharePost() {
    const posts = await prisma.post.findMany()
    console.log(posts)
    return (
        <div>
            <ShareInfo posts={posts} />
        </div>
    )
}



export default sharePost