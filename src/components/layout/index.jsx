import { Header } from './header'
import { Footer } from './footer'
import { TitleCard } from '../TitleCard'

export const MainLayout = ({ children }) => {
  return (

        <div>
          <Header/>
          {children}
          <Footer/>
        </div>
        

  )
}

{/* <Footer /> */}
{/* <Header /> */}