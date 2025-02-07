import Parallax from "@/components/Parallax";
import ShowcaseWindow from "@/components/ShowcaseWindow.tsx";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
const Portfolio = () => (
  <section>
    <ScrollIndicator />
    <Parallax />
    {/* Project and About section */}
    <ShowcaseWindow />
    <Footer />
  </section>
);

export default Portfolio;
