import HeroSearch from "@/components/HeroSearch";
import FeaturedListings from "@/components/FeaturedListings";
import ServicesSection from "@/components/ServicesSection";
import NewsSection from "@/components/NewsSection";
import NewsletterSection from "@/components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSearch />
      <FeaturedListings />
      <ServicesSection />
      <NewsSection />
      <NewsletterSection />
    </>
  );
}
