import Link from "next/link";
import Menu from "./menu";
import Image from "next/image";
import Searchbar from "./searchbar";
import NavbarIcons from "./navbaricons";
const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-32 xl:px-8 2xl:px-36 relative '>
            {/*mobile*/}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">Luxora</div>
                </Link>
                <Menu />
            </div>
            {/*Bigger Screens*/}
            <div className="hidden md:flex items-center gap-8 justify-between  h-full">
                {/*Left*/}
                <div className="w-1/3 xl:1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image alt="" src="/logo.png" width={24} height={24}></Image>
                        <div className="text-2xl tracking-wide">Luxora</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>

                </div>
                {/*Right*/}
                <div className="w-2/3 xl:1/2 flex items-center justify-between gap-8">
                    <Searchbar></Searchbar>
                    <NavbarIcons></NavbarIcons>
                </div>
            </div>
        </div >
    )
}

export default Navbar