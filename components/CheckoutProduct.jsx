import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon, StarIcon } from '@heroicons/react/solid';
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, incrementQuantity, decrementQuantity, removeFromBasket } from "../slice/basketSlice"
function CheckoutProduct({
    id,
    title,
    rating,
    price,
    description,
    category,
    image,
    hasPrime,
    quantity,
}) {


    const rate = Math.floor(rating.rate)
    const dispatch = useDispatch()

    const incrementItemCart = (id) => {
        dispatch(incrementQuantity(id))
    }
    const decrementItemCart = (id) => {
        dispatch(decrementQuantity(id))
    }
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime, rating
        }
        dispatch(addToBasket(product))
    }
    const removeItemFromBasket = (id) => {
        dispatch(removeFromBasket(id))
    }
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
                <p className='mb-5'>{title}</p>
                <div className="flex">
                    {
                        Array(rate).fill().map((_, index) => (
                            <StarIcon key={index} className="h-5 text-yellow-500" />
                        ))
                    }
                </div>
                <p className="text-xs my-2 line-clamp-3">
                    {description}
                </p>
                <Currency quantity={price} currency="USD" />
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
                <PlusIcon className='h-8 cursor-pointer' onClick={() => incrementItemCart(id)} />
                <span className="font-bold">{quantity}</span>
                <MinusIcon className='h-8 cursor-pointer' onClick={() => decrementItemCart(id)} />
            </div>
            {/* right */}
            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button" onClick={addItemToBasket}>Add To Basket</button>
                <button className="button" onClick={() => removeItemFromBasket(id)}>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct