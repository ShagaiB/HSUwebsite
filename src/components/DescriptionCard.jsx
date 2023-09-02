import { Typography } from './Typography'

export const DescriptionCard = ({ title, desc, color }) => {
  return (
    <div className={`${color == 'blue' ? 'bg-[#021F40]' : 'bg-[#FFB60D]'}  flex flex-col pb-4 pt-12 pl-8 pr-16 w-[744px]`}>
      <Typography className={` ${color == 'blue' ? 'text-white' : 'text-black'} leading-[66px]`} variant={'h1'}>
        {title}
      </Typography>
      <div className={` h-[1px] w-[40%] ml-8 min-w-[80px] mt-4 mb-4  ${color == 'blue' ? 'bg-white' : 'bg-black'}`}></div>
      <Typography className={` mb-14  ${color == 'blue' ? 'text-white' : 'text-black'} `} variant={'body'}>
        {desc}
      </Typography>
    </div>
  )
}
