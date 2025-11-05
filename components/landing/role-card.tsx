import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

export function RoleCard({
  icon: Icon,
  title,
  description,
  ctaLabel,
  href,
}: {
  icon: LucideIcon
  title: string
  description: string
  ctaLabel: string
  href: string
}) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
          <Icon className="h-5 w-5 text-primary" aria-hidden />
        </div>
        <CardTitle className="mt-2 text-pretty">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1" />
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={href} aria-label={`${ctaLabel} for ${title}`}>
            {ctaLabel}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
