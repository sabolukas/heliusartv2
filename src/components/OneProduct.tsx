"use client";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import ModalImage from "@/components/ModalImage";
import { useState } from "react";
import { isMobile } from "react-device-detect";

type Props = {
   name: string;
   data: StaticImageData[];
};

const OneProduct = ({ name, data }: Props) => {
   const [imgIndex, setImgIndex] = useState<number | null>(null);

   if (imgIndex !== null && imgIndex < 0) {
      setImgIndex(data.length - 1);
   } else if (imgIndex !== null && imgIndex > data.length - 1) {
      setImgIndex(0);
   }

   return (
      <div>
         <h3 className="flex items-center gap-1 uppercase py-4 select-none">
            <Link href={"/galeria"} className="flex items-center hover:opacity-70">
               <ChevronLeft strokeWidth={1.5} size={24} />
               Galéria
            </Link>
            / {name}
         </h3>
         <div className="flex flex-wrap gap-3">
            {data.map((oneImage, index) => (
               <div
                  key={index}
                  className={`flex sm:h-72 flex-grow overflow-hidden rounded ${data.length <= 3 ? "customLg:max-w-[33%] sm:max-w-[48.5%] w-full" : "customXl:max-w-[24%] customLg:max-w-[32.2%] sm:max-w-[48.5%] w-full"}`}
               >
                  <Image
                     src={oneImage}
                     alt={name}
                     placeholder="blur"
                     onClick={() => !isMobile && setImgIndex(index)}
                     className="w-full h-full sm:object-cover rounded sm:hover:scale-[101%] transition cursor-pointer select-none"
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
               name={name}
            />
         )}
      </div>
   );
};

export default OneProduct;
