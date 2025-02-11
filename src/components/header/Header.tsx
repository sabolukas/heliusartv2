import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Header = () => {
   return (
      <div className="w-full flex items-center justify-between py-5 bg-white uppercase">
         <Link href="/">
            <Image
               src="/logo.png"
               alt="logo"
               width="240"
               height="100"
               className="w-24"
               priority={true}
            />
         </Link>
         <div className="flex gap-10 items-center">
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
      </div>
   );
};

export default Header;
