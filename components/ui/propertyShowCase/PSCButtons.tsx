'use client'
import { Search } from "lucide-react"
import { useState } from "react"
export function PSCButtons() {
    const [activeButton, setActiveButton] = useState(1)

    return (
        <div className="mt-12 xs:mx-auto md:mx-auto sm:mx-auto mx-1">
            <div className="mx-auto flex justify-items-center items-center">
                <button
                onClick={() => setActiveButton(1)}
                className={`ml-auto font-roboto font-medium text-lg w-[80px] h-[35px] ${activeButton === 1 ? "bg-neutral-800 text-slate-100 hover:bg-neutral-700 hover:text-slate-100" : "bg-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:text-neutral-800"} rounded-full transition duration-300 ease-out`}
                >Buy</button>

                <button
                onClick={() => setActiveButton(2)}
                className={`mx-4 font-roboto font-medium text-lg w-[80px] h-[35px] ${activeButton === 2 ? "bg-neutral-800 text-slate-100 hover:bg-neutral-700 hover:text-slate-100" : "bg-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:text-neutral-800"} rounded-full transition duration-300 ease-out`}
                >Sell</button>

                <button
                onClick={() => setActiveButton(3)}
                className={`mr-6 font-roboto font-medium text-lg w-[80px] h-[35px] ${activeButton === 3 ? "bg-neutral-800 text-slate-100 hover:bg-neutral-700 hover:text-slate-100" : "bg-neutral-300 text-neutral-800 hover:bg-neutral-200 hover:text-neutral-800"} rounded-full transition duration-300 ease-out`}
                >Text</button>

                <div className="relative mr-auto">
                    <input type="text" placeholder="Home in street..." className="outline-none rounded-full h-[35px] w-[200px] border-2 border-solid border-neutral-800 pl-3 pr-12 font-roboto"/>
                    <button className="absolute inset-y-0 right-0 px-3 rounded-full bg-neutral-800 flex items-center justify-center"><Search className="stroke-slate-50"/></button>
                </div>
            </div>
        </div>
    )
}
