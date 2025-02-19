import { SearchHeader } from "@/components/ui";
export function Header() {
    return (
        <div className=" flex items-center bg-zinc-200">
            <div className="mx-auto py-8 flex justify-center flex-col">
                <h1 className="mx-auto text-9xl font-bona font-bold mt-14">Atrium</h1>
                <h2 className="mx-auto font-bona text-[27px]">Your Dream Home, Your Best Invest</h2>
                <SearchHeader/>
            </div>
        </div>
    )
}
