import { Hero } from "@/components/landing/hero"
import { SafetyBanner } from "@/components/landing/safety-banner"
import { ResourcesGrid } from "@/components/landing/resources-grid"
import { RoleCard } from "@/components/landing/role-card"
import { Footer } from "@/components/landing/footer"
import QuickExit from "@/components/quick-exit"
import { Shield, HeartHandshake, Scale, UserCog } from "lucide-react"

export default function HomePage() {
  return (
    <main id="content" className="min-h-[100dvh]">
      <QuickExit />

      <Hero />

      <section aria-labelledby="safety" className="container mx-auto px-4 py-4 md:py-6">
        <h2 id="safety" className="sr-only">
          Safety notice
        </h2>
        <SafetyBanner />
      </section>

      <section aria-labelledby="roles" className="container mx-auto px-4 py-8 md:py-12">
        <div className="mx-auto max-w-3xl text-center mb-8 md:mb-10">
          <h2 id="roles" className="text-pretty text-2xl md:text-3xl font-semibold">
            Choose your role to get started
          </h2>
          <p className="text-muted-foreground mt-2">
            Gender-responsive support tailored to your needs. Your safety and privacy come first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <RoleCard
            icon={Shield}
            title="Victim / Survivor"
            description="Find urgent help, safety planning, shelters, health information, and confidential support."
            ctaLabel="Get help now"
            href="#help"
          />
          <RoleCard
            icon={HeartHandshake}
            title="Counsellor"
            description="Provide guidance, log sessions, share resources, and monitor client progress with care."
            ctaLabel="Open counsellor tools"
            href="#resources"
          />
          <RoleCard
            icon={Scale}
            title="Legal Advisor"
            description="Offer legal advice, update rights and procedures, and assist with protection orders."
            ctaLabel="View legal resources"
            href="#legal"
          />
          <RoleCard
            icon={UserCog}
            title="Admin"
            description="Manage content, roles, and platform security. Ensure data privacy and compliance."
            ctaLabel="Open admin area"
            href="#admin"
          />
        </div>
      </section>

      <section id="resources" aria-labelledby="resources-title" className="container mx-auto px-4 py-8 md:py-12">
        <h2 id="resources-title" className="text-pretty text-2xl md:text-3xl font-semibold mb-6 md:mb-8">
          Resources and support services
        </h2>
        <ResourcesGrid />
      </section>

      <Footer />
    </main>
  )
}
