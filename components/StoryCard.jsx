import Image from 'next/image'
import React from 'react'

const StoryCard = ({ src, profile, name }) => {
  return (
    <div className='relative lg:h-[10em] lg:w-[6.5em] p-3 transition duration-200 transform ease-in hover:scale-105 hover:animate-pulse overflow-x '>
      <Image
        className="absolute top-10 z-50 rounded-full opacity-0 lg:opacity-100"
        src={profile}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      />
      <Image
      className="object-cover filter brightness-75 rounded-full lg:rounded-3xl "
      src={src}
      layout="fill"/>
    </div>
  )
}

export default StoryCard
