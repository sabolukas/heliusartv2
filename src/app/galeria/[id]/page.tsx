import galleryData from "@/components/data/galleryData";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
   const id = (await params).id;

   const oneProduct = galleryData.find((oneSection) => oneSection.id === id);
   if (!oneProduct) {
      return <div>Produkt nebol nájdený</div>;
   }
   const { name, data } = oneProduct;

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
      </div>
   );
}
