import {
  CameraIcon,
  EmojiHappyIcon,
  VideoCameraIcon,
} from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  serverTimestamp,
  setDoc,
  doc,
} from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import * as firebase from 'firebase/app'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { db, storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
const InputBox = () => {
  const { data: session } = useSession()
  const inputRef = useRef()
  const filePickerRef = useRef()
  const [imageToPost, setImageToPost] = useState(null)
  const sendPost = (e) => {
    e.preventDefault()
    if (!inputRef.current.value) return
    addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((docs) => {
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${docs.id}`)
        const uploaderTask = uploadBytesResumable(
          storageRef,
          toString(imageToPost, 'data_URL')
        )
        removeImage()

        uploaderTask.on(
          // when the state changes
          'state_change',
          null,
          // if there is error
          (error) => console.error(error),
          () => {
            // when the upload completes
            //   storageRef.getDownloadURL().then((url) => {
            //       db.collection('posts').doc(doc.id).set({ postImage: url }, { merge: true })
            //     })
            getDownloadURL(uploaderTask.snapshot.ref).then((url) => {
              setDoc(
                doc(
                  db,
                  'posts',
                  `${docs.id}`,
                  ),
                  { imagePost: url },
                  { merge: true }
              )
            })
          }
        )
      }
    })
    inputRef.current.value = ''
  }
  const addImageToPost = (e) => {
    const reader = new FileReader()
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result)
    }
  }
  const removeImage = () => {
    setImageToPost(null)
  }
  return (
    <div className="mt-6 rounded-2xl bg-white p-2 font-medium text-gray-500 shadow-md">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 focus:outline-none"
            type="text"
            ref={inputRef}
            placeholder={`Whats's on your mind, ${session.user.name}?`}
          />
          <button type="submit" className="hidden" onClick={sendPost}>
            Send post
          </button>
        </form>
        {imageToPost && (
          <div className="flex cursor-pointer flex-col" onClick={removeImage}>
            <img
              src={imageToPost}
              className="h-10 rounded-md object-contain"
              alt=""
            />
            <p className="text-center text-xs text-red-500">Remove</p>
          </div>
        )}
      </div>
      <div className="border-1 flex justify-evenly p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>
        <div
          className="inputIcon"
          onClick={() => filePickerRef.current.click()}
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
