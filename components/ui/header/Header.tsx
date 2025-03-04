import { SearchHeader } from "@/components/ui";

export function Header() {
  return (
   <div className="w-full h-[612px] bg-fixed bg-[url('https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1635&auto=format&fit=crop')] bg-cover bg-top sm:bg-center">
      <div className="mx-auto py-8 flex justify-center flex-col text-center">
        <h1 className="mx-auto xl:text-9xl lg:text-9xl md:text-9xl font-bona font-bold mt-14 sm:text-9xl text-7xl">Atrium</h1>
        <h2 className="mx-auto font-bona text-[27px]">Your Dream Home, Your Best Invest</h2>
        <SearchHeader />
      </div>
    </div>
  );
}
