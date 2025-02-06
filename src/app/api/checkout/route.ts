import { productsData } from "@/type";
// import { request } from "http";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const POST = async (req: NextRequest) => {

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);
    try {
        const reqBody = await req.json();  
        const { items, email } = reqBody;  



const existingItems = await items?.map((item: productsData) => ({
    quantity: item.quantity,
    price_data:{
        currency: "usd",
        unit_amount: Math.round(item.price * 100),
        product_data:{
            name: item.title,
            description: item.description,
        }
    },
}))

const origin = req.headers.get("origin");
console.log(origin);

const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: existingItems,
    mode: "payment",
    success_url: `${origin}/success/?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cancel/?canceled=true`,
    metadata:{
        email,
    }
})

        return NextResponse.json(
            { url: session.url },
            { status: 200 }
        );

    } catch (error) {
        return NextResponse.json({ error: error }, { status: 500 });
    }
};
