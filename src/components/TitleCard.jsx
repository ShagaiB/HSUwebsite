import { useState } from 'react'
import { Typography } from './Typography'

export const TitleCard = ({ children, color, long = false, more = false, handleClick, classNameForWidth}) => {


  return (
    <div className={` ${color == 'blue' ? 'bg-[#021F40]' : 'bg-[#FFB60D]'}  flex flex-col py-4 px-8 w-fit `}>
      <Typography className={color == 'blue' ? 'text-white' : 'text-black'} variant={'h1'}>
        {children}
      </Typography>

      <div
        className={` h-[1px]  ml-8 min-w-[80px] mt-1 mb-4 ${long ? "w-[70%]": "w-[40%]"}  ${color == 'blue' ? 'bg-white' : 'bg-black'} ${classNameForWidth}`}
      ></div>
    </div>
  )
}
