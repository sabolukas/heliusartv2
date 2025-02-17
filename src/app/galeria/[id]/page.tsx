import galleryData from "@/components/data/galleryData";
import OneProduct from "@/components/OneProduct";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
   const id = (await params).id;

   const oneProduct = galleryData.find((oneSection) => oneSection.id === id);
   if (!oneProduct) {
      return <div>Produkt nebol nájdený</div>;
   }
   const { name, data } = oneProduct;

   return <OneProduct name={name} data={data} />;
}
