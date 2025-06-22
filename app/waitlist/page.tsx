"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageTransition } from "@/components/page-transition"
import { ResponsiveImage } from "@/components/responsive-image"
import { StaggerContainer, StaggerItem, LoadingSpinner } from "@/components/loading-animations"
import { Logo } from "@/components/logo"

export default function Component() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    setSubmitError(null)

    try {
      // Prepare form data for Formspree
      const formData = new FormData()
      formData.append("email", email)
      formData.append("_subject", `New Waitlist Signup: ${email}`)

      // Submit to Formspree (replace YOUR_WAITLIST_FORM_ID with your actual form ID)
      const response = await fetch("https://formspree.io/f/mnnvbyvw", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setShowSuccessModal(true)
        setEmail("")
      } else {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to join waitlist")
      }
    } catch (error) {
      console.error("Waitlist submission error:", error)
      setSubmitError(error instanceof Error ? error.message : "Failed to join waitlist. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
          <Logo size="xl"/>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-slate-800 text-white border-slate-800 hover:bg-slate-700 hover:border-slate-700 text-sm sm:text-base px-4 sm:px-6"
            >
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Button>
          </Link>
        </header>

        {/* Breadcrumb */}
        <div className="px-4 sm:px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Join Waitlist" }]} />
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <StaggerContainer className="w-full max-w-md space-y-6 text-center">
            <StaggerItem>
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">Join Our Waitlist</h1>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed px-2">
                  Join thousands getting early access to Africa's smartest
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  technician-matching platform
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-800 text-sm">{submitError}</p>
                  </div>
                )}

                <Input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 sm:h-14 bg-gray-200 border-gray-200 text-gray-700 placeholder:text-gray-500 text-sm sm:text-base"
                  required
                />

                <Button
                  type="submit"
                  className="w-full h-12 sm:h-14 bg-slate-800 hover:bg-slate-700 text-white disabled:opacity-50 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  disabled={isLoading || !email}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <LoadingSpinner size="sm" color="white" />
                      <span>Joining...</span>
                    </div>
                  ) : (
                    "Join Waitlist"
                  )}
                </Button>
              </form>
            </StaggerItem>

            <StaggerItem>
              <div className="pt-4">
                <Link href="/">
                  <Button
                    variant="outline"
                    className="w-full h-12 sm:h-14 border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200 hover:scale-105 text-sm sm:text-base"
                  >
                    Learn More About Our Services
                  </Button>
                </Link>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex items-center gap-3 justify-center pt-2">
                <div className="w-6 h-6 bg-white rounded flex items-center justify-center shadow-sm">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm text-gray-600">Continue with Google</span>
              </div>
            </StaggerItem>

            {/* <StaggerItem>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-xs text-blue-800 text-center">
                  <strong>Note:</strong> To activate this form, replace "YOUR_WAITLIST_FORM_ID" in the code with your
                  actual Formspree form ID.
                  <br />
                  Create a free account at{" "}
                  <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">
                    formspree.io
                  </a>{" "}
                  to get started.
                </p>
              </div>
            </StaggerItem> */}
          </StaggerContainer>
        </main>

        {/* Bottom Images */}
        <div className="px-4 sm:px-6 pb-8">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {[
              { src: "/images/Six.png", alt: "Female technician with cleaning supplies" },
              { src: "/images/Plumbing.png", alt: "Male technician with solar panels" },
              { src: "/images/One.png", alt: "Female technician in kitchen" },
              { src: "/images/Five.png", alt: "Male construction worker" },
            ].map((image, index) => (
              <StaggerItem key={index}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    width={250}
                    height={250}
                    className="hover:scale-105 transition-transform duration-300 absolute inset-0"
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Success Modal */}
        <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
          <DialogContent className="sm:max-w-md mx-4 sm:mx-0">
            <DialogHeader>
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <DialogTitle className="text-center text-lg sm:text-xl font-semibold text-gray-900">
                You're on the list!
              </DialogTitle>
            </DialogHeader>
            <div className="text-center space-y-4">
              <p className="text-gray-600 text-sm sm:text-base">
                Thanks for joining our waitlist! We'll notify you as soon as Fixit launches in your area.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-xs sm:text-sm text-orange-800">
                  <strong>What's next?</strong> Keep an eye on your inbox for exclusive updates and early access
                  opportunities.
                </p>
              </div>
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-sm sm:text-base"
              >
                Got it!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Footer />
      </div>
    </PageTransition>
  )
}
