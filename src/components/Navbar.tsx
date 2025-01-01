import Link from "next/link";
import Menu from "./menu";

const Navbar = () => {
    return (
        <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
            {/*mobile*/}
            <div className="flex items-center justify-between">
                <Link href="/">Hardik</Link>
                <Menu />
            </div>
        </div >
    )
}

export default Navbar