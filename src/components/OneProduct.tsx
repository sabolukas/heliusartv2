"use client";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import ModalImage from "@/components/ModalImage";
import { useState } from "react";

type Props = {
   name: string;
   data: StaticImageData[];
};

const OneProduct = ({ name, data }: Props) => {
   const [imgIndex, setImgIndex] = useState<number | null>(null);

   return (
      <div>
         <h3 className="flex items-center gap-1 uppercase pt-4 pb-4">
            <Link href={"/galeria"} className="flex items-center hover:opacity-70">
               <ChevronLeft strokeWidth={1.5} size={24} />
               Galéria
            </Link>
            / {name}
         </h3>
         <div className="flex flex-wrap gap-[15px]">
            {data.map((oneImage, index) => (
               <div
                  key={index}
                  className={`flex h-72 flex-grow overflow-hidden rounded ${data.length <= 3 ? "max-w-[33%] basis-[32%]" : "max-w-[24%]"}`}
               >
                  <Image
                     src={oneImage}
                     alt={name}
                     className="w-full h-full object-cover rounded hover:scale-[101%] transition cursor-pointer"
                  />
               </div>
            ))}
         </div>
         {imgIndex !== null && (
            <ModalImage
               imageSrc={data[imgIndex]}
               onLeftArrow={() => setImgIndex(imgIndex - 1)}
               onRightArrow={() => setImgIndex(imgIndex + 1)}
               onClose={() => setImgIndex(null)}
            />
         )}
      </div>
   );
};

export default OneProduct;
