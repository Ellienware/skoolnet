import { ArticlesSection } from "./article-section";
import { ContactSection } from "./contact-section";
import { FaqSection } from "./faq-section";
import { HelpHeader } from "./help-header";


export function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <HelpHeader />
        <div className="space-y-16 mb-16">
          <ArticlesSection />
          <FaqSection />
          <ContactSection />
        </div>
      </div>
    </div>
  )
}