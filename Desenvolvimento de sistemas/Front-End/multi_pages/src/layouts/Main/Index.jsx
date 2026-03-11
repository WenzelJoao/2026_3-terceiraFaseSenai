import Header from '../Header/Index'
import Footer from '../Footer/Index'
import { Outlet } from 'react-router'

const Main
 = () => {
  return (
    <div className='flex min-h-screen flex-col'>
        <Header/>

        <main className='flex-1 container mx-auto'>
            <Outlet/>
        </main>

        <Footer/>

    </div>
  )
}

export default Main
