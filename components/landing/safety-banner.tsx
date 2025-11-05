import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export function SafetyBanner() {
  return (
    <Alert role="alert" className="border-destructive/40">
      <AlertTitle className="font-semibold">If you are in immediate danger</AlertTitle>
      <AlertDescription className="mt-1">
        Call your local emergency number. In the U.S., dial 911. You can also contact the National Domestic Violence
        Hotline at 1-800-799-7233 or use their live chat.
      </AlertDescription>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <Button asChild className="bg-destructive text-destructive-foreground hover:opacity-90">
          <a href="tel:911" aria-label="Call emergency services (U.S. 911)">
            Emergency Call
          </a>
        </Button>
        <Button asChild variant="outline">
          <a href="tel:+18007997233" aria-label="Call National Domestic Violence Hotline">
            <Phone className="h-4 w-4 mr-2" aria-hidden />
            Call 1-800-799-7233
          </a>
        </Button>
        <Button asChild variant="ghost">
          <Link
            href="https://www.thehotline.org/what-is-live-chat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open live chat with the Hotline in a new tab"
          >
            Open Live Chat
          </Link>
        </Button>
      </div>
      <p className="text-muted-foreground mt-3 text-sm">
        Tip: Use the Quick Exit button or press Esc to leave this site immediately. Consider using a private window if
        it is safe to do so.
      </p>
    </Alert>
  )
}
