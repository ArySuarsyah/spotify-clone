import React from 'react'
import Image from 'next/image';
import test from '../../../../public/Test.jpg'
import { IoMdPlay } from "react-icons/io";

const CardList = () => {
  return (
    <div className='group bg-[#171717] w-[20%] rounded-lg px-3 pt-3 pb-4 grid gap-5 relative transition duration-700'>
      <div className='bg-[rgb(31,220,99)] hidden justify-center items-center w-10 h-10 rounded-full absolute bottom-28 right-5 group-hover:bottom-32 group-hover:flex'>
        <IoMdPlay size={20} color='#000' />
      </div>
      <div className='h-32 w-44 rounded-lg box-border object-center overflow-hidden bg-white'>
        <Image src={test} alt="image" height={200} width={200} />
      </div>
      <div className='font-bold'>
        <h2 >Happy Hits!</h2>
      </div>
      <div className='text-sm text-slate-400 '>
        <span className='break-words line-clamp-2'>
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laborum!</span>
      </div>
    </div>
  )
}

export default CardList
