import Slider from "@/components/Slider";

const Page = () => {
   return (
      <div className="w-full h-full">
         <Slider />
         <div className="flex flex-col justify-start gap-3 py-10 px-4 sm:px-0">
            <h2 className="text-xl">Neváhajte ma kontaktovať</h2>
            <p>
               Ak máte akúkoľvek otázku, prosím kontaktujte ma cez email alebo na
               telefónnom čísle.
            </p>
            <h3 className="text-lg">HeliusArt</h3>
            <p>
               Železničiarska 6 <br />
               811 04 Bratislava
            </p>
            <p>
               e-mail:{" "}
               <a href="mailto:helena.pohankova@gmail.com">helena.pohankova@gmail.com</a>{" "}
               <br />
               mobil: <a href="tel:+421902360513">+421 902 360 513</a>
            </p>
         </div>
      </div>
   );
};

export default Page;
