import { useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'

function orders() {
    const session = useSession()

    return (
        <div className="bg-gray-100 h-screen">
            <Header />
            <main className="max-w-6xl mx-auto p-10">
                <h1 className="text3xl border-b mb-2 border-yellow-400">
                    Your Orders
                </h1>
                {
                    session.data
                        ? (<h2>X Orders</h2>)
                        : (<h2>Please Sign in to see your order</h2>)
                }
            </main>
        </div>
    )
}

export default orders