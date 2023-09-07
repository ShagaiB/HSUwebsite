import Link from 'next/link'
import logo from '../../../public/assets/HobbySchoolLogo.png'
import Image from 'next/image'
import { Typography } from '../Typography'
import { useRouter } from 'next/router';


const list = [
  { name: 'Admissions', url: '/admissions' },
  { name: 'Curriculum', url: '/curriculum' },
  { name: 'Explore', url: '/explore' },
  { name: 'NewsLetter', url: '/newsLetter' },
  { name: 'Counselor', url: '/counselor' },
]

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="h-[145px] z-50 bg-white w-screen fixed flex justify-center">
      <div className=" max-w-[1260px] flex flex-row w-screen justify-between items-center h-[145px] ">
        <Link href = "/">
        <div className="flex flex-row items-center cursor-pointer">
          <div className="w-[85px] ">
          <Image fill src={logo} alt="img of school logo"></Image>
          </div>

          <Typography variant = "schoolTitle" className={"ml-3"}>Hobby School of Ulaanbaatar</Typography>
        </div>
        </Link>



        <div className='w-[70%] flex flex-row justify-around'>
        {list.map((el) => {
          return (
            <Link href={el.url} className = "w-fit h-fit">
              <div>
                <Typography variant = "bodyBold" className={`hover:text-[#1676F3] cursor-pointer border-b-4  ${el.url === pathname? "border-[#1676F3] text-[#1676F3]": " border-transparent"}`} >{el.name}</Typography>
              </div>
            </Link>
          )
        })}
        </div>
      </div>
    </div>
  )
}
