import React from 'react'
import Image from 'next/image'
import HeaderIcon from '../components/HeaderIcon'
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from '@heroicons/react/solid'
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import { signOut, useSession } from 'next-auth/react'
const Header = () => {
  const {data:session}= useSession();
  return (
    <header className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
      {/* left */}
      <div className="flex items-center p-2">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="ml-2 flex items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 flex items-center bg-transparent placeholder-gray-500 outline-none flex-shrink"
          />
        </div>
      </div>
      {/* center */}
      <div className="flex flex-grow justify-center">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/* profile pic */}
        <Image onClick={signOut}
        className='rounded-full cursor-pointer'src={session.user.image}width='40' height={40}layout='fixed'/>
        <p className='whitespace-nowrap font-semibold pr-3 hidden xl:inline-flex'>{session.user.name}</p>
        <ViewGridIcon className='icon'/>
        <ChatIcon className='icon'/>
        <BellIcon className='icon'/>
        <ChevronDownIcon className='icon'/>
      </div>
    </header>
  )
}

export default Header
