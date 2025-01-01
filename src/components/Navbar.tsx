import Link from "next/link";
import Menu from "./menu";

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
            {/*mobile*/}
            <div className="h-full flex items-center justify-between">
                <Link href="/">
                    <div className="text-2xl tracking-wide">Luxora</div>
                </Link>
                <Menu />
            </div>
            {/*Bigger Screens*/}
        </div >
    )
}

export default Navbar