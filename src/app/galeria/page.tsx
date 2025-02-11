import galleryData from "@/components/data/galleryData";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
   return (
      <div className="flex flex-wrap gap-5 after:basis-[48.7%]">
         {galleryData.map(({ id, name, data }) => (
            <div
               key={id}
               className="max-h-[21.125rem] rounded basis-[48.7%] grow relative overflow-hidden"
            >
               <Link href={`/galeria/${id}`}>
                  <Image
                     src={data[0]}
                     alt={name}
                     className="w-full h-full object-cover rounded hover:scale-[101%] transition cursor-pointer"
                  />
                  <button className="absolute left-4 bottom-4 w-52 h-10 bg-gray-300/60 backdrop-blur-sm border border-white/60 rounded-sm text-white text-sm transition-opacity hover:opacity-95 hover:border-white/40">
                     {name}
                  </button>
               </Link>
            </div>
         ))}
      </div>
   );
};

export default Page;
