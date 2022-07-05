import React from 'react'
import Stories from '../components/Stories'
import InputBox from '../components/InputBox'
import Posts from '../components/Posts'
const Feed = () => {
  return (
    <div className="mt-10 flex-grow h-screen pb-44 mr-4 overflow-y-auto scrollbar-hide">
     <div className="mx-auto mx-w-md md:max-w-lg lg:max-w-2xl">
      <Stories />
      <InputBox/>
      <Posts/>
         </div> 
    </div>
  )
}

export default Feed
