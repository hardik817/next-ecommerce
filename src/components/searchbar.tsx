"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
const Searchbar = () => {
    const router = useRouter();
    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget)
        const name = formdata.get("name") as string
        if (name) {
            router.push(`/list?name=${name}`)
        }
    }
    return (
        <form className='flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 ' onSubmit={handleSearch}>
            <input type="search" name="name" id="" placeholder="Search" className="flex-1 bg-transparent outline-none" />
            <button className="cursor-pointer">
                <Image alt="" src="/search.png" width={16} height={16}></Image>
            </button>
        </form>
    )
}

export default Searchbar