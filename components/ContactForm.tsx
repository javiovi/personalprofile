"use client"
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { useLanguage } from "@/context/language-context"

export default function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    
    console.log('EmailJS Config:', {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    })
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'javio.dev@gmail.com',
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error: any) {
      console.error('Error detallado:', {
        message: error?.message,
        name: error?.name,
        stack: error?.stack
      })
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="bg-[#1E1E1E] border-[#2D2D2D]">
      <CardContent className="p-6 md:p-8 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#E2E2E2]">
                {t("contact.name")}
              </label>
              <input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="flex h-10 w-full rounded-md border border-[#2D2D2D] bg-[#0B0B0F] px-3 py-2 text-sm text-[#E2E2E2] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF94] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={t("contact.placeholder.name")}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#E2E2E2]">
                {t("contact.email")}
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="flex h-10 w-full rounded-md border border-[#2D2D2D] bg-[#0B0B0F] px-3 py-2 text-sm text-[#E2E2E2] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF94] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder={t("contact.placeholder.email")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-[#E2E2E2]">
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="flex min-h-[120px] w-full rounded-md border border-[#2D2D2D] bg-[#0B0B0F] px-3 py-2 text-sm text-[#E2E2E2] ring-offset-background placeholder:text-[#9CA3AF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00FF94] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder={t("contact.placeholder.message")}
            />
          </div>
          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#00FF94] text-[#0B0B0F] hover:bg-[#00FF94]/90"
          >
            {loading ? 'Sending...' : t("contact.send")}
          </Button>

          {status === 'success' && (
            <p className="text-green-500 text-center">Message sent successfully!</p>
          )}
          {status === 'error' && (
            <p className="text-red-500 text-center">Error sending message. Please try again.</p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}