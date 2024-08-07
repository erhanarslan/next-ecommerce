import Image from "next/image"


const SearchBar = () => {
  return (
    <form className=" flex items-center justify-between gap-4 rounded-md border bg-gray-100 p-2 flex-1">
        <input type="text" placeholder="Search" className="flex-1 bg-transparent outline-none" />
        <button className="cursor-pointer">
            <Image src="/search.png" alt="" width={16} height={16}/>
        </button>
    </form>
  )
}

export default SearchBar