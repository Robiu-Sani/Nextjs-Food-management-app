import ContactBanner from "./ContactBanner";
import ContactIntro from "./ContactIntro";
import ContactPage from "./ContactPage";

export default function page() {
  return (
    <div>
      <ContactBanner />
      <ContactIntro />
      <ContactPage />
    </div>
  );
}
