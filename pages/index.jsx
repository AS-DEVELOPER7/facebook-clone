import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'
import Head from 'next/head'
import Login from '../components/Login'
import {getSession}from 'next-auth/react'
const Home = ({session}) => {
  if (!session)return<Login/>;
  return (

    <div >
      <Head>
        <title> facebook-clone </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className='flex'>
          {/* sidebar */}
          <Sidebar/>
          {/* Feed */}
          <Feed/>
          {/* widgets */}
          <Widgets/>
      </main>
    </div>
  )
}

export default Home
export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
    props:{
      session
    }
  }
} 