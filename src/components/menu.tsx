"use client"

import { useState } from "react"
import Image from "next/image";
import Link from "next/link";
const Menu = () => {
    const [open, SetOpen] = useState(false);
    return (
        <div className=''>
            <Image src="/menu.png" alt="" width={28} height={28} className='cursor-pointer' onClick={() => SetOpen((prev) => !prev)}></Image>
            {
                open && (<div className="">
                    <Link href="/">HomePage</Link>
                    <Link href="/">Shop</Link>
                    <Link href="/">Deals</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    <Link href="/">Cart(1)</Link>
                    <Link href="/">Logout</Link>
                </div>)
            }
        </div >
    )
}

export default Menu