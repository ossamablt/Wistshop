import { UpdatedHeader } from "@/components/layout/updated-header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedCategories } from "@/components/home/featured-categories"
import { ProductShowcase } from "@/components/home/product-showcase"

import { NewsletterSection } from "@/components/home/newsletter-section"

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <UpdatedHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedCategories />
        <ProductShowcase />
  
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
