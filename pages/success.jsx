import React from 'react'
import Header from "../components/Header"
import {CheckCircleIcon} from "@heroicons/react/solid"
import {useRouter} from "next/router"
function success() {
    const router = useRouter()
    
  return (
    <div className="bg-gray-300 h-screen">
        <Header/>
        <main className="max-w-6xl mx-auto mt-20">
            <div className="flex flex-col p-10 bg-white">
                <div className=" flex self-center space-x-2 mb-5">
                    <CheckCircleIcon className='h-10 text-green-500'/>
                    <h1 className="texte-3xl">Thank you, your order has been confirmed</h1>
                </div>
                <p>
                Thank you for shopping with us. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime quisquam sunt beatae eum non, ut iusto impedit error sequi voluptas!
                </p>
                <button className="button mt-8" onClick={()=> router.push("/orders")}>
                Go to my orders
                </button>
            </div>
        </main>
    </div>
  )
}

export default success