import React, { useState } from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
function CheckoutProduct({
    image
}) {
    const [hasPrime, setHasPrime] = useState(Math.random() < 0.5)
    console.info(hasPrime);
    return (
        <div className="grid grid-cols-5 my-5">
            <Image
                src={image}
                height={200}
                width={200}
                objectFit="contain"
                alt='product'
            />
            {/* middle */}
            <div className="col-span-2 mx-5">
                <p>title procuct</p>
                <div className="flex">
                    {
                        Array(5).fill().map((_, index) => (
                            <StarIcon key={index} className="h-5 text-yellow-500" />
                        ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.
                </p>
                <Currency quantity={20} currency="USD" />
                {
                    hasPrime &&
                    <>
                        <img
                            loading='lazy'
                            className='w-12'
                            src="https://links.papareact.com/fdw"
                            alt=''
                        />
                        <p className='text-xs text-gray-500'>FREE Next-day Dilevery</p>
                    </>
                }
            </div>
            {/* product quantity */}
            <div className="flex flex-col sm:flex-row space-x-3 items-center justify-self-center sm:justify-self-end mr-5">
                <PlusIcon className='h-8 cursor-pointer' />
                <span className="font-bold">1</span>
                <MinusIcon className='h-8 cursor-pointer' />
            </div>
            {/* right */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button">Add To Basket</button>
                <button className="button">Remove From Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct