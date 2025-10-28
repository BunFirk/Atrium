import { SearchHeader } from "@/components/ui";

export function Header() {
  return (
   <div className="w-full h-[612px] bg-[url('https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1227')] bg-fixed bg-cover bg-center">
      <div className="mx-auto py-8 flex justify-center flex-col text-center">
        <h1 className="mx-auto xl:text-9xl lg:text-9xl md:text-9xl font-bona font-bold mt-14 sm:text-9xl text-7xl">Atrium</h1>
        <h2 className="mx-auto font-bona text-[27px]">Your Dream Home, Your Best Invest</h2>
        <SearchHeader />
      </div>
    </div>
  );
}
