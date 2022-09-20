import React from 'react'
import { useRouter } from "next/router"
import Image from 'next/image'
import Logo from "../public/amazon_PNG11.png"

function Footer() {
    const router = useRouter()

    return (
        <footer>
            {/* footer 1st */}
            <div className='bg-[#485769] text-white text-sm font-semibold py-4'>
                <p className='text-center cursor-pointer' onClick={() => router.push("/")}>Back To Top</p>
            </div>
            {/* footer 2st */}
            <div className='bg-[#232f3e] text-white font-semibold text-center'>
                <div className='max-w-screen-xl mx-auto font-semibold text-left px-8 grid sm:grid-cols-3 lg:grid-cols-4 py-10 sm:text-left'>
                    <div>
                        <h4 className='text-xl pb-2'>Get to know Use</h4>
                        <ul className='text-sm'>
                            <li className="link">Careers</li>
                            <li className="link">Blog</li>
                            <li className="link">About Amazon</li>
                            <li className="link">Investor Relations</li>
                            <li className="link">Amazon Devices</li>
                            <li className="link">Amazon Science</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl pb-2'>Make Money with Us</h4>
                        <ul className='text-sm'>
                            <li className="link">Sell products on Amazon</li>
                            <li className="link">Sell on Amazon BusinessCareers</li>
                            <li className="link">Sell apps on Amazon</li>
                            <li className="link">Become an Affiliate</li>
                            <li className="link">Advertise Your Products</li>
                            <li className="link">Self-Publish with Us</li>
                            <li className="link">Host an Amazon Hub</li>
                            <li className="link">› See More Make Money with Us</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl pb-2'>Amazon Payment Products</h4>
                        <ul className='text-sm'>
                            <li className="link">Amazon Business Card</li>
                            <li className="link">Shop with Points</li>
                            <li className="link">Reload Your Balance</li>
                            <li className="link">Amazon Currency Converter</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='text-xl pb-2'>Let Us Help You</h4>
                        <ul className='text-sm'>
                            <li className="link">Amazon and COVID-19</li>
                            <li className="link">Your Account</li>
                            <li className="link">Your Orders</li>
                            <li className="link">Shipping Rates & Policies</li>
                            <li className="link">Returns & Replacements</li>
                            <li className="link">Manage Your Content and Devices</li>
                            <li className="link">Amazon Assistant</li>
                            <li className="link">Help</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* footer 3rd */}
            
            <div className='bg-[#232f3e] text-white font-semibold text-center border-t border-gray-300/30 py-10'>
                <div className='flex justify-center'>
                    <div className='mr-10'>
                        <Image
                            src={Logo}
                            width={75}
                            height={23}
                            alt="amazon"
                        />
                    </div>
                    <div className='space-x-4'>
                        <button className="border border-gray-300 rounded-sm px-5 cursor-pointer">English</button>
                        <button className="border border-gray-300 rounded-sm px-5 cursor-pointer">
                            <span className='font-semibold'>$</span>-U.S. Dollar
                        </button>
                        <button className="border border-gray-300 rounded-sm px-5 cursor-pointer">United States</button>
                    </div>
                </div>
            </div>
            {/* footer 4th */}
            <div className='bg-[#232f3e] text-white font-semibold'>
                <div className='max-w-screen-xl mx-auto grid grid-cols-3 gap-2
                items-baseline sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-7 space-y-5
                px-6 py-8
                 '>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                    <div className='text-left link'>
                        <h3 className='text-sm'>Amazon Music</h3>
                        <p className='font-light'>Stream millions of songs</p>
                    </div>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer