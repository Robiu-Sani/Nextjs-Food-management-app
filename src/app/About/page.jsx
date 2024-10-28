import AboutBanner from "./AboutBanner";
import AboutSummery from "./AboutSummery";
import AboutUsDetailed from "./AboutUsDetailed";
import MissionVision from "./MissionVision";
import Team from "./Team";

export default function page() {
  return (
    <div>
      <AboutBanner />
      <AboutUsDetailed />
      <MissionVision />
      <Team />
      <AboutSummery />
    </div>
  );
}
