import Image from 'next/image'
import LogoImage from '../public/amazon_PNG11.png'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from "next-auth/react"

function Header() {
  const { data: session } = useSession()

  // console.info(session);

  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazone_blue p-1 flex-grow py-2" >
        <div className="flex mt-2 items-center flex-grow sm:flex-grow-0">
          <Image
            src={LogoImage}
            width={150}
            height={40}
            objectFit="contain"
            className='cursor-pointer'
          />
        </div>
        {/* search */}
        <div className="hidden sm:flex items-center h-10 cursor-pointer flex-grow rounded-md bg-yellow-400 hover:bgc-yellow-500">
          <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink-0 rounded-1-md focus:outline-none px-4' />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-8 mx-6 whitespace-nowrap relative">
          <div className="relative">
            <p className="link" onClick={!session ? signIn : null}>
              {session ? `Hello, ${session.user.name}` : "Sign In"}
            </p>
            <p className=" link font-extrabold md:text-sm"> Account & List</p>
           {
            session &&  
            <span className="absolute bottom-0-right-7 h-5 bg-yellow-400 text-center cursor-pointer w-13  text-black font-bold rounded px-1" onClick={signOut}>
              Sign Out
          </span>
           }
          </div>
          <div className="link">
            <p>Return</p>
            <p className="fornt-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute top-0 right-0 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">0</span>
            <ShoppingCartIcon className='h-10' />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
          </div>
        </div>

      </div>
      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 bg-amazone_blue text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className='h-6 mr-1' />
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  )
}

export default Header