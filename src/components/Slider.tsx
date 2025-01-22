"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type ImageItem = {
   id: number;
   src: string;
   alt: string;
};

const IMAGES: ImageItem[] = [
   { id: 1, src: "/img_01.jpg", alt: "image1" },
   { id: 2, src: "/img_02.jpg", alt: "image2" },
   { id: 3, src: "/img_03.jpg", alt: "image3" },
   { id: 4, src: "/img_04.jpg", alt: "image4" },
];

const Slider = () => {
   const [index, setIndex] = useState(0);

   useEffect(() => {
      if (index < 0) {
         setIndex(IMAGES.length - 1);
      } else if (index > IMAGES.length - 1) {
         setIndex(0);
      }
   }, [index]);

   useEffect(() => {
      const setIntervalID = setInterval(() => {
         setIndex(index + 1);
      }, 7000);
      return () => clearInterval(setIntervalID);
   }, [index]);

   return (
      <div className="w-full h-72 flex relative overflow-hidden">
         {IMAGES.map((item, itemIndex) => {
            let mainClass = "opacity-0 translate-x-full";
            if (itemIndex === index) {
               mainClass = "opacity-100 translate-x-0";
            }
            if (
               itemIndex === index - 1 ||
               (index === 0 && itemIndex === IMAGES.length - 1)
            ) {
               mainClass = "opacity-0 -translate-x-full";
            }

            return (
               <Image
                  src={item.src}
                  key={itemIndex}
                  width={1024}
                  height={700}
                  alt={item.alt}
                  className={`object-cover w-full h-full absolute top-0 left-0 rounded transition duration-1000 ease-linear ${mainClass}`}
               />
            );
         })}
      </div>
   );
};

export default Slider;
