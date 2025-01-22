import Slider from "@/components/Slider";

const Homepage = () => {
   return (
      <div className="flex flex-col items-center justify-center gap-10 pb-10 w-full">
         <Slider />
         <h1 className="text-center text-2xl">Mgr.Art. Helena Pohanková</h1>
         <p className="text-center">
            Mgr. art. Helena Pohanková je slovenská keramička s 20-ročnou skúsenosťou v
            tomto odbore. Absolvovala Vysokú školu výtvarných umení v Bratislave (VŠVU),
            kde získala titul Mgr. art. Počas svojej kariéry sa venovala rôznym technikám
            keramiky a jej práce sa zameriavajú na vytváranie unikátnych, ručne vyrábaných
            a detailne zdobených keramických diel.
         </p>
      </div>
   );
};

export default Homepage;
