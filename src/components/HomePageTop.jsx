import { DescriptionCard } from './DescriptionCard'
import Image from 'next/image'
import topPic from '../../public/assets/TopOfHomePage.png'

const longLorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

const imageStyle = {
  width: '100%',
  height: '100%',
}

export const HomePageTop = () => {
  return <div className=" w-screen h-screen flex items-center  flex-col ">

    <div className='flex flex-col justify-between items-start absolute z-20 h-full pb-12 w-[90%]'>
      <div className='w-1 h-1 '></div>
      <DescriptionCard color= "blue" title = "The First The Best " desc = {longLorem}/>

    </div>
    <div className='h-24'></div>
    <div className='w-screen '><Image fill src = {topPic}></Image></div>
    
  </div>
}
