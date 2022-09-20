import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import CheckoutProduct from '../components/CheckoutProduct'
import productImage from "../public/snack.jpg"

function Checkout() {
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="max-w-6xl mx-auto">
                <div className="flex-grow m-5 shadow-sm">
                    <div className='text-center'>
                        <Image
                            src="https://links.papareact.com/ikj"
                            width={1020}
                            height={250}
                            objectFit='contain'
                        />
                    </div>

                    <div className="flex flex-col p-5 space-y-10 bg-white">
                        <div className="text-3xl border-b pb-4">
                            {
                                Array(3).fill().map((_, i) => (
                                    <div key={i}>
                                        <CheckoutProduct
                                            image={productImage}
                                            
                                        // id={item.id}
                                        // title={item.title}
                                        // rating={item.rating}
                                        // price={item.price}
                                        // description={item.description}
                                        // category={item.category}
                                        // image={item.image}
                                        // hasPrime={item.hasPrime}
                                        // quantity={item.quantity}
                                        />
                                        <hr className='border-1 border-gray-200' />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Checkout