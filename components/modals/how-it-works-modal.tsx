"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Search, UserCheck, Calendar, CreditCard, Star, Shield } from "lucide-react"
import { StaggerContainer, StaggerItem } from "../loading-animations"
import Link from "next/link"

interface HowItWorksModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HowItWorksModal({ open, onOpenChange }: HowItWorksModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-slate-800 mb-4">How Fixit Works</DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-8 p-2 sm:p-0">
          <StaggerItem>
            <div className="text-center">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Getting professional help for your home or business has never been easier. Here's how Fixit works:
              </p>
            </div>
          </StaggerItem>

          {/* Step-by-step process */}
          <StaggerItem>
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  {
                    step: 1,
                    icon: Search,
                    title: "Describe Your Problem",
                    description:
                      "Tell us what needs fixing - plumbing, electrical, appliances, or any other technical issue. Upload photos to help technicians understand the problem better.",
                    color: "blue",
                  },
                  {
                    step: 2,
                    icon: UserCheck,
                    title: "Get Matched with Verified Technicians",
                    description:
                      "Our smart algorithm finds the best available technicians in your area based on skills, ratings, and availability. All technicians are background-checked and verified.",
                    color: "green",
                  },
                  {
                    step: 3,
                    icon: Calendar,
                    title: "Schedule Your Service",
                    description:
                      "Choose your preferred date and time. Get upfront pricing with no hidden fees. Track your technician's arrival in real-time.",
                    color: "purple",
                  },
                  {
                    step: 4,
                    icon: CreditCard,
                    title: "Get It Fixed & Pay Securely",
                    description:
                      "Your technician arrives on time, completes the work professionally, and you pay securely through the app. Rate your experience to help others.",
                    color: "orange",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center space-y-2 sm:space-y-3 px-2 sm:px-0">
                    <div
                      className={`flex items-center justify-center w-16 h-16 bg-${item.color}-100 rounded-full mx-auto`}
                    >
                      <div className={`flex items-center justify-center w-8 h-8 bg-${item.color}-600 rounded-full`}>
                        <span className="text-white font-bold text-sm">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Quality Assurance */}
          <StaggerItem>
            <div className="bg-slate-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 text-center">Quality Assurance</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-green-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Verified Professionals</h4>
                    <p className="text-sm text-gray-600">
                      Background checks, skill assessments, and insurance verification for every technician.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-6 h-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">Quality Guarantee</h4>
                    <p className="text-sm text-gray-600">
                      All work comes with our satisfaction guarantee. Not happy? We'll make it right.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* CTA */}
          <StaggerItem>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-slate-800">Ready to Get Started?</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/request-service">
                  <Button
                    className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3"
                    onClick={() => onOpenChange(false)}
                  >
                    Request Service Now
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={() => onOpenChange(false)}
                  className="px-8 py-3 border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Close
                </Button>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </DialogContent>
    </Dialog>
  )
}
