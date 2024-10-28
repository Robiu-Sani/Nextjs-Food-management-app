import AboutOurServices from "./AboutOurServices";
import DeliveryServices from "./DeliveryServices";
import ServicesBanner from "./ServicesBanner";
import ServicesPartSection from "./ServicesPartSection";

export default function page() {
  return (
    <div>
      <ServicesBanner />
      <ServicesPartSection />
      <DeliveryServices />
      <AboutOurServices />
    </div>
  );
}
