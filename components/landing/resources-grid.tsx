import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, MapPin, Stethoscope, ShieldQuestion } from "lucide-react"
import Link from "next/link"

const items = [
  {
    icon: BookOpen,
    title: "Know Your Rights",
    desc: "Understand protection orders, reporting options, and your legal rights.",
    href: "#legal",
    cta: "Explore legal info",
  },
  {
    icon: Stethoscope,
    title: "Health & Wellbeing",
    desc: "Learn about physical and mental health risks and steps to get care.",
    href: "#health",
    cta: "Read health guidance",
  },
  {
    icon: MapPin,
    title: "Find Local Services",
    desc: "Shelters, counselling, legal aid, and medical services near you.",
    href: "#services",
    cta: "View nearby support",
  },
  {
    icon: ShieldQuestion,
    title: "Safety Planning",
    desc: "Practical steps to improve safety for you and your dependents.",
    href: "#planning",
    cta: "Start a safety plan",
  },
]

export function ResourcesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
      {items.map((item) => (
        <Card key={item.title} className="h-full flex flex-col">
          <CardHeader>
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" aria-hidden />
            </div>
            <CardTitle className="mt-2">{item.title}</CardTitle>
            <CardDescription className="leading-relaxed">{item.desc}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1" />
          <CardFooter>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href={item.href} aria-label={item.cta}>
                {item.cta}
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
