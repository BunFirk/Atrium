import Image from "next/image";

export function HomeInStartPage() {
    return (
        <div className="mt-24 grid grid-rows-2 gap-12">
            <div className="grid grid-cols-2 mx-24 gap-12">
                <div className="w-full h-full m-auto aspect-square relative" >
                <Image
                    src="https://images.unsplash.com/photo-1560026301-88340cf16be7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Building image"
                    layout="fill"
                    objectFit="cover"
                    quality={100} // Отключает сжатие
                    className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute w-full h-full items-end flex">
                    
                    <div className="bg-gradient-to-t from-white/75 to-transparent bg-opacity-50 w-full font-roboto">
                        <p className="text-4xl font-semibold text-zinc-900/95 mt-20 ml-7">Home Pon</p>
                        <p className="text-xl font-medium text-zinc-900/95 mt-2 ml-7">Lorem ipsum liric look design cats</p>
                        <p className="text-xl font-medium text-zinc-900/95 mb-4 ml-7">Lorem ipsum liric look design cats brat sophie</p>
                        <p className="text-4xl font-semibold ml-7 text-zinc-900/100 mb-3">$2.999.999</p>
                    </div>
                </div>
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-12">
                <div className="w-full h-full m-auto aspect-square relative" >
                <Image
                    src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Building image"
                    layout="fill"
                    objectFit="cover"
                    quality={100} // Отключает сжатие
                    className="w-full h-full object-cover brightness-90"
                />
                </div>

                <div className="w-full h-full m-auto aspect-square relative" >
                <Image
                    src="https://images.unsplash.com/photo-1598714805247-5dd440d87124?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Building image"
                    layout="fill"
                    objectFit="cover"
                    quality={100} // Отключает сжатие
                    className="w-full h-full object-cover brightness-90"
                />
                </div>

                <div className="w-full h-full m-auto aspect-square relative" >
                <Image
                    src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Building image"
                    layout="fill"
                    objectFit="cover"
                    quality={100} // Отключает сжатие
                    className="w-full h-full object-cover brightness-90"
                />
                </div>
                </div>
            </div> 
            <div className="mx-24">
                <div className="w-full m-auto max-h-[500px] bg-zinc-700 text-white">
                    <div className="flex">
                        <div className="w-1/2">
                            <p className="ml-8 pt-6 xl:text-5xl lg:text-4xl font-roboto font-semibold">About Us</p>
                            <p className="ml-8 mt-4 xl:text-xl lg:text-base pr-2 font-normal font-roboto">At EliteNest Realty, we believe that buying or selling a property should be an exciting and rewarding journey, not a stressful one. With years of experience in the real estate market, our team of dedicated professionals is committed to providing top-notch service, expert guidance, and exclusive property opportunities.</p>
                            <p className="ml-8 mt-6 xl:text-xl lg:text-base pr-2 font-normal font-roboto">Our mission is to help our clients make informed decisions, whether they are purchasing their first home, expanding their investment portfolio, or relocating to a new city. We take pride in our transparency, market expertise, and personalized approach, ensuring that every client finds the perfect property that meets their needs and goals.</p>
                            <p className="ml-8 mt-6 xl:text-xl lg:text-base pr-2 font-normal font-roboto mb-2">Your dream home or investment is just one step away. Let’s make it a reality together!</p>
                        </div>
                        <div className="w-1/2 h-[500px] relative">
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1887&auto=format&fit=crop"
                                alt="About Us"
                                layout="fill"
                                objectFit="cover"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}