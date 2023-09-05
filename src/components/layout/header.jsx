import Link from 'next/link'
import logo from '../../../public/assets/HobbySchoolLogo.png'
import Image from 'next/image'

const list = [
  { name: 'Admissions', url: '/admissions' },
  { name: 'Curriculum', url: '/curriculum' },
  { name: 'Explore', url: '/explore' },
  { name: 'NewsLetter', url: '/newsLetter' },
  { name: 'Counselor', url: '/counselor' },
]

export const Header = () => {
  return (
    <div className="h-[145px] w-screen max-w-[1260px]">
      <div className=" max-w-[1260px] flex flex-row w-screen justify-between items-center h-[145px] fixed backdrop-blur-sm">
        <Link href = "/">
        <div className="flex flex-row items-center cursor-pointer">
          <div className="w-[85px] ">
          <Image fill src={logo} alt="img of school logo"></Image>
          </div>

          <div className=' ml-5 w-[330px] text-[34px] font-serif font-bold leading-[34px]'>
            <h1>Hobby School of Ulaanbaatar</h1>
          </div>
        </div>
        </Link>

        <div className='w-[70%] flex flex-row justify-around'>
        {list.map((el) => {
          return (
            <Link className=" cursor-pointer" href={el.url}>
              {el.name}
            </Link>
          )
        })}
        </div>
      </div>
    </div>
  )
}
