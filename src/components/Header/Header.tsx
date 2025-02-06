import Container from '../Container'
import Logo from '../logo'
import SearchInput from '../SearchInput'
import { navBarList } from '../../constants'
import Link from 'next/link'
import {HiMenuAlt2} from 'react-icons/hi'
const Header = () => {
  return (
    <div>
      <header className='w-full h-20 bg-accentwhite border-b-[1px] border-b-lightText/50'>
        <Container className='h-full flex items-center justify-between gap-5 lg:gap-10'>
        <Logo />
        <SearchInput />
        <div className='hidden md:inline-flex items-center gap-7'>
          {navBarList.map((item) => (
            <Link key={item?.title} href={item?.path} /**path===link */ 
            className='navBarItem'>
            {item?.title}
            </Link>
          ))}
          <Link href={'/signin'} className='navBarItem'>
          Sign in
          </Link>
          {/* <Link href={'/orders'} className='navBarItem'>
          Order
          </Link> */}
          <Link href={'/studio'} className='navBarItem'>
          Studio
          </Link>
        </div>
        <HiMenuAlt2 className='inline-flex md:hidden cursor-pointer text-2xl 
        hover:text-darkOrange hoverEffect' />
        </Container>
      </header>
    </div>
  )
}

export default Header
