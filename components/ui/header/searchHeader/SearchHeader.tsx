export function SearchHeader() {
    return (
        <div className="w-[700px] h-[60px] bg-zinc-300 mx-auto mt-64 mb-2 border border-solid border-zinc-800 flex justify-center items-center">

              <select name="city" id="city-select" className="font-roboto text-xl w-[100px] mx-auto bg-zinc-300 focus:outline-0 ">
                <option value="" className="">City</option>
                <option value="petersburg">Санкт-Петербург</option>
                <option value="samara">Самара</option>
                <option value="perm">Пермь</option>
                <option value="novosibirsk">Новосибирск</option>
            </select>

            <div className="w-0 h-10 border-s border-solid border-black mx-auto"></div>

            <select name="city" id="city-select" className="font-roboto text-xl xl:w-[100px] mx-auto bg-zinc-300 focus:outline-0">
                <option value="">Distric</option>
                <option value="petersburg">1</option>
                <option value="samara">2</option>
                <option value="perm">3</option>
                <option value="novosibirsk">4</option>
            </select>

            <div className="w-0 h-10 border-s border-solid border-black mx-auto"></div>

            <select name="city" id="city-select" className="font-roboto text-xl xl:w-[100px] mx-auto bg-zinc-300 focus:outline-0">
                <option value="">Rooms</option>
                <option value="petersburg">1</option>
                <option value="samara">2</option>
                <option value="perm">3</option>
                <option value="novosibirsk">4</option>
            </select>

            <div className="w-0 h-10 border-s border-solid border-black mx-auto"></div>

            <select name="city" id="city-select" className="font-roboto text-xl xl:w-[100px] mx-auto bg-zinc-300 focus:outline-0">
                <option value="">Price</option>
                <option value="petersburg">1</option>
                <option value="samara">2</option>
                <option value="perm">3</option>
                <option value="novosibirsk">4</option>
            </select>

            <button className="font-roboto text-xl mx-auto bg-gray-800 text-gray-100 w-[100px] h-full mr-0">Search</button>
        </div>
    )
}
