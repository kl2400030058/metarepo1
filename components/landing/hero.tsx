import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <header className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" aria-hidden />
              Gender-Responsive Support
            </div>

            <h1 className="text-balance mt-4 text-3xl md:text-5xl font-semibold">
              Safe Path: Resources and Support to Combat Domestic Violence
            </h1>
            <p className="text-muted-foreground mt-3 md:mt-4 leading-relaxed">
              Access legal rights, healthcare guidance, and confidential support services. Your safety is our
              priority—leave quickly anytime with the Quick Exit.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground">
                <Link href="#help">Get Help Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#resources">Browse Resources</Link>
              </Button>
            </div>

            <p className="sr-only">Press the Escape key to quickly leave this site.</p>
          </div>

          <div className="relative">
            <Image
              src="/supportive-counsellor-talking-with-survivor-in-cal.jpg"
              alt="Supportive, calm scene symbolizing safety and help."
              width={560}
              height={420}
              className="rounded-xl border border-border"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  )
}
