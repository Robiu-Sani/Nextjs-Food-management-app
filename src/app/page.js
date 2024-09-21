import Banner from "./(HomeComponents)/Banner";
import CategorySection from "./(HomeComponents)/CategorySection";
import Introductin from "./(HomeComponents)/Introductin";
import OfferSection from "./(HomeComponents)/OfferSection";
import PopularFood from "./(HomeComponents)/PopularFood";
import ProductsSection from "./(HomeComponents)/ProductsSection";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularFood></PopularFood>
      <Introductin></Introductin>
      <ProductsSection></ProductsSection>
      <CategorySection></CategorySection>
      <OfferSection></OfferSection>
    </div>
  );
}
