"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useCallback, useEffect } from "react"

function quickExit() {
  try {
    // Clear easily visible local data
    localStorage.clear()
    sessionStorage.clear()
  } catch {
    // ignore
  }
  // Replace history to avoid back button returning
  window.location.replace("https://www.weather.com")
}

export default function QuickExit() {
  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      quickExit()
    }
  }, [])

  useEffect(() => {
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onKey])

  return (
    <div className="fixed right-4 bottom-4 z-50" aria-live="polite" aria-label="Quick exit controls">
      <Button
        onClick={quickExit}
        className="bg-destructive text-destructive-foreground hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-destructive"
        size="lg"
        aria-label="Quick exit. Press Escape at any time."
      >
        <X aria-hidden className="h-5 w-5 mr-2" />
        Quick Exit (Esc)
      </Button>
    </div>
  )
}
