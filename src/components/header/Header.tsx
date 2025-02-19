"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toogleMenu = () => {
      setIsOpen(!isOpen);

      if (!isOpen) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "auto";
      }
   };

   return (
      <div className="w-full flex items-center justify-between py-5 px-4 sm:px-0 uppercase">
         <Link href="/">
            <Image
               src="/logo.png"
               alt="logo"
               width="240"
               height="100"
               className="w-24 opacity-85 dark:invert"
            />
         </Link>

         {/*Desktop*/}
         <div className="sm:flex gap-10 items-center hidden">
            <Link href="/galeria">Galéria</Link>
            <Link href="/kontakt">Kontakt</Link>
            <Link
               href="https://instagram.com/helena_pohankova"
               target="_blank"
               rel="noopener"
            >
               <Instagram size={18} />
            </Link>
            <Link
               href="https://www.facebook.com/heliusart"
               target="_blank"
               rel="noopener"
            >
               <Facebook size={20} />
            </Link>
         </div>

         {/*Mobile*/}
         <div className="sm:hidden flex">
            <Menu onClick={toogleMenu} />
            {isOpen && (
               <div className="fixed top-0 left-0 bg-background p-6 flex flex-col gap-6 w-screen h-screen overflow-hidden z-40">
                  <Link href="/" onClick={toogleMenu}>
                     O mne
                  </Link>
                  <Link href="/galeria" onClick={toogleMenu}>
                     Galéria
                  </Link>
                  <Link href="/kontakt" onClick={toogleMenu}>
                     Kontakt
                  </Link>
                  <div className="py-6 flex flex-col gap-6">
                     <Link
                        href="https://instagram.com/helena_pohankova"
                        target="_blank"
                        rel="noopener"
                        className="flex flex-row items-center gap-2"
                     >
                        <Instagram size={18} />
                        <span>Instagram</span>
                     </Link>
                     <Link
                        href="https://www.facebook.com/heliusart"
                        target="_blank"
                        rel="noopener"
                        className="flex flex-row items-center gap-2"
                     >
                        <Facebook size={20} />
                        <span>Facebook</span>
                     </Link>
                  </div>
                  <X onClick={toogleMenu} className="absolute top-6 right-6" />
               </div>
            )}
         </div>
      </div>
   );
};

export default Header;
