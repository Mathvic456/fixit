"use client"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { LearnMoreModal } from "@/components/learn-more-modal"
import { ResponsiveImage } from "@/components/responsive-image"
import { StaggerContainer, StaggerItem } from "@/components/loading-animations"
import { Logo } from "@/components/logo"
import { useState } from "react"

const faqData = [
  {
    question: "What is Fixit?",
    answer:
      "Fixit is Africa's smartest technician-matching platform that connects you with verified, professional technicians for all your home and business repair needs. We make it easy to find reliable experts for plumbing, electrical work, appliance repair, and more.",
  },
  {
    question: "How do I book a technician?",
    answer:
      "Booking is simple! Just describe your problem, select your preferred time, and we'll match you with the best available technician in your area. You can track their arrival, communicate directly, and pay securely through the app.",
  },
  {
    question: "Are the technicians verified?",
    answer:
      "Yes! All technicians on our platform go through a rigorous verification process including background checks, skill assessments, and customer reviews. We ensure you're getting qualified professionals you can trust.",
  },
  {
    question: "What services are available?",
    answer:
      "We offer a wide range of services including plumbing, electrical work, appliance repair, HVAC maintenance, carpentry, painting, cleaning services, solar installation, and general handyman services. More services are being added regularly.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing varies by service type and complexity. You'll see transparent pricing upfront before booking, with no hidden fees. We offer competitive rates and you can compare different technicians' quotes to find the best value.",
  },
]

export default function HomePage() {
  const [showLearnMoreModal, setShowLearnMoreModal] = useState(false)

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-100">
        {/* Header */}
        <header className="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-4">
          <Logo />
          <div className="flex gap-2">
            <Link href="/request-service">
              <Button className="bg-orange-500 text-white hover:bg-orange-600 text-sm sm:text-base px-4 sm:px-6">
                Request Service
              </Button>
            </Link>
            <Link href="/waitlist">
              <Button variant="outline" className="text-sm sm:text-base px-4 sm:px-6">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <StaggerContainer className="w-full max-w-4xl space-y-6 text-center">
            <StaggerItem>
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Need a Reliable Technician?
                  <br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>
                  We've Got You.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
                  Book verified professionals for any repair or installation task, anytime and anywhere.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link href="/request-service" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg min-w-[160px] transition-all duration-200 hover:scale-105">
                    Request Service
                  </Button>
                </Link>
                <Link href="/waitlist" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg min-w-[160px] transition-all duration-200 hover:scale-105">
                    Join Waitlist
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg min-w-[160px] border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                  onClick={() => setShowLearnMoreModal(true)}
                >
                  Learn More
                </Button>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </main>

        {/* Image Gallery */}
        <div className="px-4 sm:px-6 pb-12 sm:pb-16">
          <StaggerContainer className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {[
              { src: "/images/One.png", alt: "Female cleaning technician with supplies", priority: true },
              { src: "/images/Two.png", alt: "Solar panel installation technician", priority: true },
              { src: "/images/Three.png", alt: "Kitchen appliance repair technician", priority: false },
              { src: "/images/Plumbing.png", alt: "Construction worker with safety gear", priority: false },
              { src: "/images/Five.png", alt: "Electrical technician working", priority: false },
              { src: "/images/Six.png", alt: "Plumbing technician with tools", priority: false },
            ].map((image, index) => (
              <StaggerItem key={index}>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <ResponsiveImage
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={300}
                    className="hover:scale-105 transition-transform duration-300 absolute inset-0"
                    priority={image.priority}
                  />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* FAQ Section */}
        <div className="bg-white px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <StaggerContainer>
              <StaggerItem>
                <div className="text-center mb-8 sm:mb-12">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
                  <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
                    Got questions? We've got answers. Here's everything you need to know before joining Fixit.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border border-gray-200 rounded-lg px-4 sm:px-6 transition-all duration-200 hover:shadow-md"
                    >
                      <AccordionTrigger className="text-left font-medium text-slate-800 hover:no-underline py-4 sm:py-6 text-sm sm:text-base">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 pb-4 sm:pb-6 leading-relaxed text-sm sm:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>

        {/* Footer */}
        <Footer />

        {/* Learn More Modal */}
        <LearnMoreModal open={showLearnMoreModal} onOpenChange={setShowLearnMoreModal} />
      </div>
    </PageTransition>
  )
}
