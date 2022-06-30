import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import imgUser from '../public/user.png';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { db, storage } from '../firebaseInit';
import { addDoc, setDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      if (imageToPost) {
        const storageRef = ref(storage, `posts/${docRef.id}`);
        uploadString(storageRef, imageToPost, 'data_url').then((snapshot) => {
          getDownloadURL(storageRef).then((url) => {
            console.log(`url => ${url}`)
            setDoc(docRef, { postImage: url }, { merge: true });
          }).catch((error) => {
            console.error(error);
          });
          removeImage();
        }).catch((e) => {
          console.error(e);
        });
      }
      inputRef.current.value = '';
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    }
  }

  const removeImage = () => {
    setImageToPost(null);
  }

  return (
    <div className='bg-white p-2 rounded-xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image ? session.user.image : imgUser}
          width={40}
          height={40}
          layout='fixed'
          alt='user'
        />
        <form className='flex flex-1 '>
          <input
            ref={inputRef}
            className='rounded-full h-12 bg-gray-100 grow px-5 focus:outline-none'
            type='text' placeholder={`What's on your mind${session.user.name ? `, ${session.user.name}` : ''}`}
          />
          <button hidden type='submit' onClick={sendPost}>Submit</button>
        </form>

        {imageToPost && (
          <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img className="h-10 object-contain" src={imageToPost} alt="preview image" />
            <p className="text-xs text-center text-red-500">remove</p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div onClick={() => filepickerRef.current.click()} className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            ref={filepickerRef}
            type='file'
            hidden
            onChange={addImageToPost}
          />
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox