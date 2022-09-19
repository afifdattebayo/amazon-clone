import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from "@heroicons/react/solid"
import Currency from "react-currency-formatter"

// const MAX_RATING = 5
// const MIN_RATING = 1

function Product({ id, title, price, description, category, image, rating }) {
    // const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + 1)
    const ratingApi = Math.floor(rating.rate)
    const [hasPrime] = useState(Math.random() < 0.5)
    return (
        <div className='relative flex flex-col m-5 p-10 bg-white z-30'>
            <p className='absolute top-2 right-2 text-xs text-gray-400'>{category}</p>
            <Image
                src={image}
                width={200}
                height={200}
                objectFit="contain"
                alt='product'
            />
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {
                    Array(ratingApi).fill().map((_, index) => (
                        <StarIcon key={index} className="h-5 text-yellow-500" />
                    ))
                }
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-20">
                <Currency quantity={price} currency="USD" />
            </div>


            {hasPrime && (
                <div className='flex items-center space-x-2 mt-5'>
                    <img className='w-12' src="https://links.papareact.com/fdw" alt="" />
                    <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
                </div>
            )}
            <button className='button'>Add To Basket</button>

        </div>
    )
}

export default Product