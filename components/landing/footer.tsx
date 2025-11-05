export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold">About</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              A gender-responsive platform providing safe, confidential access to legal rights, health resources, and
              support services for those affected by domestic violence.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Privacy & Safety</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <a className="underline underline-offset-4 hover:no-underline" href="#privacy">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4 hover:no-underline" href="#safety-tips">
                  Safety tips
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4 hover:no-underline" href="#terms">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Contact</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <a className="underline underline-offset-4 hover:no-underline" href="mailto:support@example.org">
                  support@example.org
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4 hover:no-underline" href="#report">
                  Report an issue
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground text-sm mt-6">
          This site does not replace professional advice. If you are in danger, call your local emergency number.
        </p>
      </div>
    </footer>
  )
}
