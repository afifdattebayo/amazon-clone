const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)


// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
    const { items, email } = req.body;
    const transformedItems = items.map((item) => ({
        price_data: {
            currency: "usd",
            unit_amount: item.price * 100,
            product_data: {
                name: item.title,
                images: [item.image]
            }
        },
        // description: item.description,
        quantity: 1,
    }))

    // shipping_rates: ['shr_1KP2i1Fziy9pX4yMPPHjzyR7'],
    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        shipping_address_collection: {
            allowed_countries: ["BD", "US", "CA","ID"],
        },
        line_items: transformedItems,
        mode: "payment",
        success_url: `${process.env.NEXTAUTH_URL}/success`,
        cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
        metadata: {
            email,
            images: JSON.stringify(items.map((item) => item.image)),
        }
    })
    res.status(200).json({ id: session.id })
}