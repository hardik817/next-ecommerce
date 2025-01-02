"use client"
import Image from "next/image"
const Cart = () => {
    const cartItems = true
    return (
        <div className='w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 '>
            {!cartItems ? (<div className="">Cart is Empty</div>)
                :
                (<>
                    <h2 className="text-xl">Shopping Cart</h2>
                    <div className="flex flex-col gap-4">


                        <div className="flex gap-4">
                            <Image src="https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
                            <div className="flex flex-col justify-between w-full ">
                                <div className="">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product name</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/*bottom */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">qty.2 </span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Image src="https://images.pexels.com/photos/6117187/pexels-photo-6117187.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
                            <div className="flex flex-col justify-between w-full ">
                                <div className="">
                                    <div className="flex items-center justify-between gap-8">
                                        <h3 className="font-semibold">Product name</h3>
                                        <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        available
                                    </div>
                                </div>
                                {/*bottom */}
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-500">qty.2 </span>
                                    <span className="text-blue-500">Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* footer of cart */}
                    <div className="">
                        <div className="flex items-center justify-between font-semibold ">
                            <span>Subtotal</span>
                            <span>$49</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and Taxes calculated at checkout</p>
                        <div className="flex justify-between text-sm">
                            <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View cart</button>
                            <button className="rounded-md py-3 px-4 bg-black text-white">Check out</button>
                        </div>
                    </div>
                </>)}
        </div>
    )
}

export default Cart