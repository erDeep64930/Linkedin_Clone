import React from 'react'
import { Button } from './ui/button'
import { MessageCircle, Repeat, Send, ThumbsUp } from 'lucide-react'

const SocialOptions = () => {
  return (
    <div className='flex items-center m-1 justify-center'>
<Button variant={'ghost'}>
  <ThumbsUp className='flex items-center gap-2 rounded-lg text-gray-600 hover:text-black'/>
  <p>Like</p>
</Button>
<Button variant={'ghost'}>
  <MessageCircle className='flex items-center gap-2 rounded-lg text-gray-600 hover:text-black'/>
  <p>Message</p>
</Button>
<Button variant={'ghost'}>
  <Repeat className='flex items-center gap-2 rounded-lg text-gray-600 hover:text-black'/>
  <p>Comments</p>
</Button>
<Button variant={'ghost'}>
  <Send className='flex items-center gap-2 rounded-lg text-gray-600 hover:text-black'/>
  <p>Repost</p>
</Button>
    </div>
  )
}

export default SocialOptions