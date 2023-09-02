import { Header } from './header'
import { Footer } from './footer'

export const MainLayout = ({ children }) => {
  return (
    <div className='flex flex-col items-center justify-between min-h-screen'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
