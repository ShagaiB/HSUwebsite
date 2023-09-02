import { Header } from './header'
import { Footer } from './footer'

export const MainLayout = ({ children }) => {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col items-center justify-between min-h-screen w-screen max-w-[1260px]">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
