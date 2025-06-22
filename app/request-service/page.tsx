"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { PageTransition } from "@/components/page-transition"
import { ServiceRequestForm } from "@/components/service-request-form"
import { StaggerContainer, StaggerItem } from "@/components/loading-animations"
import { Logo } from "@/components/logo"

export default function RequestServicePage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
          <Logo />
          <Link href="/">
            <Button
              variant="outline"
              className="bg-slate-800 text-white border-slate-800 hover:bg-slate-700 hover:border-slate-700 text-sm sm:text-base px-4 sm:px-6"
            >
              Back to Home
            </Button>
          </Link>
        </header>

        {/* Breadcrumb */}
        <div className="px-4 sm:px-6 lg:px-12">
          <Breadcrumb items={[{ label: "Request Service" }]} />
        </div>

        {/* Main Content */}
        <main className="px-4 sm:px-6 lg:px-12 py-8">
          <div className="max-w-2xl mx-auto">
            <StaggerContainer>
              <StaggerItem>
                <div className="text-center mb-8">
                  <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Get Professional Help Today</h1>
                  <p className="text-gray-600">
                    Fill out the form below and we'll connect you with a verified technician in your area
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <ServiceRequestForm />
              </StaggerItem>
            </StaggerContainer>
          </div>
        </main>

        <Footer />
      </div>
    </PageTransition>
  )
}
