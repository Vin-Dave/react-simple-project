import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import RecipesSection from "./components/RecipesSection";
import TipsSection from "./components/TipsSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { EventsSection } from "./components/EventsSection";
import GallerySection from "./components/GallerySection";

// import NewsletterSection from "./components/NewsletterSection";
// import ArchiveSection from "./components/ArchiveSection";
// import TagsCategoriesSection from "./components/TagsCategoriesSection";
// import UsefulLinksSection from "./components/UsefulLinksSection";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AboutSection />
        <RecipesSection />
        <TipsSection />
        <ReviewsSection />
        <EventsSection />
        <GallerySection />
        {/* <ContactSection />
        <NewsletterSection />
        <ArchiveSection />
        <TagsCategoriesSection />
        <UsefulLinksSection /> */}
      </div>
    </>
  );
}

export default App;
