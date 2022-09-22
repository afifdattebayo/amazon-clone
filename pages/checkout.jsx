import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import CheckoutProduct from '../components/CheckoutProduct'
import { useSelector } from "react-redux"
import { selectItems, selectTotal } from "../slice/basketSlice"
import { useSession } from 'next-auth/react'
import Currency from "react-currency-formatter"
import { signIn } from "next-auth/react"

// stripe
import axios from "axios"
import { loadStripe } from "@stripe/stripe-js"
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const session = useSession()

    const createCheckoutSesssion = async () => {
        const stripe = await stripePromise;
        // call the backend to create a checkout session
        const checkoutSession = await axios.post(`/api/create-checkout-session`, {
            items: items,
            email: session.data.user.email
        })
        // redicrect user/customer to stripe checkout
        const result = await stripe.redirectToCheckout({
            sessionId: checkoutSession.data.id
        })
        if (result.error) console.info(result.error.message);
    }
    return (
        <div className="bg-gray-100">
            <Header />
            <main className="lg:flex max-w-6xl mx-auto">
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
                        {
                            session.data ? (
                                items.length > 0 ? (
                                    <h1 className='font-bold text-lg'>SHOPPING BASKET</h1>
                                ) : (
                                    <h1 className='font-bold text-lg text-gray-400 self-center'>NO CART TO ADD BASKET BEFORE</h1>
                                )
                            ) : (
                                <h1 className='font-bold text-lg text-gray-400 self-center'>Please <span className='underline cursor-pointer' onClick={signIn}>Login</span> Before</h1>
                            )
                        }

                        {
                            session.data && (

                                <div className="text-3xl">
                                    {
                                        items.map((item, index) => (
                                            <div key={index}>
                                                <CheckoutProduct
                                                    id={item.id}
                                                    title={item.title}
                                                    rating={item.rating}
                                                    price={item.price}
                                                    description={item.description}
                                                    category={item.category}
                                                    image={item.image}
                                                    hasPrime={item.hasPrime}
                                                    quantity={item.quantity}
                                                />
                                                {
                                                    (items.length - 1) !== index &&
                                                    <hr className='border-1 border-gray-200' />
                                                }
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }

                    </div>
                </div>
                {
                    session.data && (

                        (items.length > 0) && (
                            <div className="flex flex-col bg-white p-10 shadow-md m-5">


                                <h2 className="whitespace-nowrap font-bold">
                                    Subtotal({items.length} items)
                                    <span className="font-bold">
                                        <Currency quantity={total} currency="USD" />
                                    </span>
                                </h2>
                                <button onClick={createCheckoutSesssion} className={`button mt-2 ${!session.data && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                                    {!session.data ? "Sign in to Checkout" : "Process to checkout"}
                                </button>


                            </div>
                        )
                    )
                }
            </main>
        </div>
    )
}

export default Checkout