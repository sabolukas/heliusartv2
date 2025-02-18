import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Props = {
   imageSrc: StaticImageData;
   onLeftArrow: () => void;
   onRightArrow: () => void;
   onClose: () => void;
   name: string;
};

const ModalImage = ({ imageSrc, onLeftArrow, onRightArrow, onClose, name }: Props) => {
   useEffect(() => {
      const listener = (e: KeyboardEvent) => {
         if (e.key === "ArrowLeft") {
            onLeftArrow();
         }
         if (e.key === "ArrowRight") {
            onRightArrow();
         }
         if (e.key === "Escape") {
            onClose();
         }
      };

      document.addEventListener("keydown", listener);

      return () => {
         document.removeEventListener("keydown", listener);
      };
   }, [onLeftArrow, onRightArrow, onClose]);

   return (
      <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-70">
         <ChevronLeft
            onClick={onLeftArrow}
            size={40}
            className="absolute left-[1vw] md:left-8 top-1/2 text-stone-50 cursor-pointer hover:bg-stone-600 hover:rounded-full"
         />

         <Image
            className="max-h-[90vh] object-contain rounded select-none"
            src={imageSrc}
            alt={name}
         />

         <ChevronRight
            onClick={onRightArrow}
            size={40}
            className="absolute right-[1vw] md:right-8 top-1/2 text-stone-50 cursor-pointer hover:bg-stone-600 hover:rounded-full"
         />
         <X
            onClick={onClose}
            size={30}
            className="absolute right-[2vw] md:right-8 top-[2vw] md:top-8 text-stone-50 cursor-pointer hover:bg-stone-600 hover:rounded-full"
         />
      </div>
   );
};

export default ModalImage;
