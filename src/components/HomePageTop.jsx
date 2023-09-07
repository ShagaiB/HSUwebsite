import { DescriptionCard } from './DescriptionCard'
import Image from 'next/image'
import topPic from '../../public/assets/TopOfHomePage.png'

const longLorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

const imageStyle = {
  width: "50vw",
  height: '100%',
}

export const HomePageTop = () => {
  return (
    <div className="h-screen flex items-center  flex-col ">
      <div className="flex flex-col max-w-[1260px] max-h-[1200px] justify-between items-start absolute -mt-[145px] z-20 h-full pb-12 w-[90%]">
        <div className="w-1 h-1 "></div>
        <DescriptionCard color="blue" title="The First The Best " desc={longLorem} />
      </div>
      <Image style={imageStyle} src={topPic}></Image>
    </div>
  )
}
