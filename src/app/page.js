import Banner from "./(HomeComponents)/Banner";
import Introductin from "./(HomeComponents)/Introductin";
import PopularFood from "./(HomeComponents)/PopularFood";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularFood></PopularFood>
      <Introductin></Introductin>
    </div>
  );
}
