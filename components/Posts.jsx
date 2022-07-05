import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import Post from '../components/Post'
import { db } from '../firebase'
const Posts = () => {
  const [value, setValue] = useState()
  useEffect(() =>
    onSnapshot(
      query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
      (snapshot) => {
        setValue(snapshot.docs)
      }
    )
  )
  return (
    <div>
      {value?.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().imagePost}
        />
      ))}
    </div>
  )
}

export default Posts
