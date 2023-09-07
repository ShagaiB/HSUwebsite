import { Header } from './header'
import { Footer } from './footer'
import { TitleCard } from '../TitleCard'

export const MainLayout = ({ children }) => {
  return (

        <div>
          <Header/>
          <div className='min-h-screen pt-[145px]'>
          {children}
          </div>
          <Footer/>
        </div>
        

  )
}

{/* <Footer /> */}
{/* <Header /> */}