"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, Globe } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()
  const [open, setOpen] = useState(false)

  const languages = [
    { code: "en", name: t("language.en") },
    { code: "es", name: t("language.es") },
  ]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="text-[#E2E2E2] hover:text-[#00FF94] hover:bg-[#1E1E1E]">
          <Globe className="h-5 w-5" />
          <span className="sr-only">{t("language")}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2 bg-[#1E1E1E] border-[#2D2D2D]">
        <div className="space-y-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              className="w-full justify-start text-[#E2E2E2] hover:text-[#00FF94] hover:bg-[#0B0B0F]"
              onClick={() => {
                setLanguage(lang.code as "en" | "es")
                setOpen(false)
              }}
            >
              <div className="flex items-center justify-between w-full">
                <span>{lang.name}</span>
                {language === lang.code && <Check className="h-4 w-4 text-[#00FF94]" />}
              </div>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

