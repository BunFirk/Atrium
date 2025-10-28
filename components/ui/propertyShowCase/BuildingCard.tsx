import Image from "next/image";

import noImg from "../../image/photo_2025-03-01_16-44-09.jpg";
import { StaticImageData } from "next/image";

type BuildingCardsProps = {
    imgUrl?: string | StaticImageData;
    title: string;
    description: string;
    price: number;
  };

export function BuildingCard({ imgUrl, title, description, price }: BuildingCardsProps) {
    const imgSrc = imgUrl || noImg

  return (
    <div className="m-auto w-[250px] mt-3 h-[300px] relative rounded-xl overflow-hidden bg-slate-100 md:mt-4">
      <Image
        src={imgSrc}
        width={250}
        height={100}
        alt="Building image"
        className="object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-neutral-600/75 to-transparent bg-opacity-50 text-zinc-900 p-2">
        <p className="text-pretty font-roboto font-bold line-clamp-1 mb-1 text-xl text-neutral-100/95 mt-5">{title}</p>
        <p className="text-pretty font-roboto font-medium break-words line-clamp-2 mb-1 text-base text-neutral-100/95">{description}</p>
        <p className="text-pretty font-roboto font-bold line-clamp-1 text-lg text-green-200/95">${price}</p>
      </div>
    </div>
  );
}
