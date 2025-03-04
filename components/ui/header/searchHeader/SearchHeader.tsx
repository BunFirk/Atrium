export function SearchHeader() {
    return (
      <div className="
        sm:wfull
        xl:w-auto
        md:w-auto
        w-full
        max-w-[700px]
        mx-auto
        mt-64
        mb-2
        border
        border-solid
        border-zinc-800
        bg-zinc-300
        h-[60px]
        flex
        items-center
        gap-2
        pl-2
        overflow-x-auto
        whitespace-nowrap
      ">
        <select
          name="city"
          className="font-roboto text-xl w-[100px] bg-zinc-300 focus:outline-0 shrink-0"
        >
          <option value="">City</option>
          <option value="petersburg">Санкт-Петербург</option>
          <option value="samara">Самара</option>
          <option value="perm">Пермь</option>
          <option value="novosibirsk">Новосибирск</option>
        </select>
  
        <div className="w-px h-10 bg-black shrink-0"></div>
  
        <select
          name="district"
          className="font-roboto text-xl w-[100px] bg-zinc-300 focus:outline-0 shrink-0"
        >
          <option value="">District</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
  
        <div className="w-px h-10 bg-black shrink-0"></div>
  
        <select
          name="rooms"
          className="font-roboto text-xl w-[100px] bg-zinc-300 focus:outline-0 shrink-0"
        >
          <option value="">Rooms</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
  
        <div className="w-px h-10 bg-black shrink-0"></div>
  
        <select
          name="price"
          className="font-roboto text-xl w-[100px] bg-zinc-300 focus:outline-0 shrink-0"
        >
          <option value="">Price</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
  
        <button className="font-roboto text-xl w-[100px] bg-gray-800 text-gray-100 h-full shrink-0">
          Search
        </button>
      </div>
    );
  }
  