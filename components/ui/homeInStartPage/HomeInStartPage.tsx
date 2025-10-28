import Image from "next/image";

export function HomeInStartPage() {
  return (
    <div className="mt-24 grid gap-12">
      {/* Первая секция с изображениями */}
      <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-24 gap-12">
        <div className="w-full h-full m-auto aspect-square relative">
          <Image
            src="https://images.unsplash.com/photo-1560026301-88340cf16be7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3"
            alt="Building image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full object-cover brightness-90 rounded-md"
          />
          <div className="absolute w-full h-full items-end flex">
            <div className="bg-gradient-to-t from-neutral-600/75 to-transparent bg-opacity-50 w-full font-roboto rounded-md">
              <p className="text-4xl font-semibold text-neutral-100/95 mt-20 ml-7">Home Pon</p>
              <p className="text-xl font-medium text-neutral-100/95 mt-2 ml-7">
                Lorem ipsum liric look design cats
              </p>
              <p className="text-xl font-medium text-neutral-100/95 mb-4 ml-7">
                Lorem ipsum liric look design 
              </p>
              <p className="text-4xl font-semibold ml-7 text-green-200/100 mb-3">
                $2.999.999
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <div className="w-full h-full m-auto aspect-square relative">
            <Image
              src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Building image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full object-cover brightness-90 rounded-md"
            />
          </div>
          <div className="w-full h-full m-auto aspect-square relative">
            <Image
              src="https://images.unsplash.com/photo-1598714805247-5dd440d87124?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Building image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full object-cover brightness-90 rounded-md"
            />
          </div>
          <div className="w-full h-full m-auto aspect-square relative">
            <Image
              src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Building image"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="w-full h-full object-cover brightness-90 rounded-md"
            />
          </div>
        </div>
      </div>
      {/* Секция About Us */}
      <div className="mx-4 md:mx-24">
        <div className="w-full m-auto bg-zinc-700 rounded-md text-white">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <p className="pt-6 xl:text-5xl lg:text-4xl md:text-4xl sm:text-4xl text-4xl font-roboto font-semibold">
                About Us
              </p>
              <p className="mt-4 xl:text-xl lg:text-base font-normal font-roboto">
                At EliteNest Realty, we believe that buying or selling a property should be an exciting and rewarding journey, not a stressful one. With years of experience in the real estate market, our team of dedicated professionals is committed to providing top-notch service, expert guidance, and exclusive property opportunities.
              </p>
              <p className="mt-2 xl:text-xl lg:text-base font-normal font-roboto">
                Our mission is to help our clients make informed decisions, whether they are purchasing their first home, expanding their investment portfolio, or relocating to a new city. We take pride in our transparency, market expertise, and personalized approach, ensuring that every client finds the perfect property that meets their needs and goals.
              </p>
              <p className="mt-2 xl:text-xl lg:text-base font-normal font-roboto mb-2">
                Your dream home or investment is just one step away. Let’s make it a reality together!
              </p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-[500px] xl:h-[512px] relative">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1887&auto=format&fit=crop"
                alt="About Us"
                layout="fill"
                objectFit="cover"
                className="w-full h-full xl:rounded-r-md lg:rounded-b-md rounded-b-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
