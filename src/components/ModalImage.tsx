import { useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type Props = {
   imageSrc: StaticImageData;
   onLeftArrow: () => void;
   onRightArrow: () => void;
   onClose: () => void;
};

const ModalImage = ({ imageSrc, onLeftArrow, onRightArrow, onClose }: Props) => {
   useEffect(() => {
      const listener = (e: any) => {
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
      <div>
         <ChevronLeft onClick={onLeftArrow} />

         <Image draggable={false} className="" src={imageSrc} alt={""} />

         <ChevronRight onClick={onRightArrow} />
         <X onClick={onClose} />
      </div>
   );
};

export default ModalImage;
