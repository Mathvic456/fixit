"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Shield, Star, Users, Wrench } from "lucide-react"
import Link from "next/link"
import { StaggerContainer, StaggerItem } from "./loading-animations"

interface LearnMoreModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LearnMoreModal({ open, onOpenChange }: LearnMoreModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto mx-2 sm:mx-4 my-4 sm:my-8">
        <DialogHeader>
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-slate-800 mb-4">
            How Fixit Works
          </DialogTitle>
        </DialogHeader>

        <StaggerContainer className="space-y-4 sm:space-y-8 p-2 sm:p-0">
          {/* Hero Section */}
          <StaggerItem>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto bg-orange-100 rounded-full">
                <Wrench className="w-8 h-8 text-orange-600" />
              </div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Fixit connects you with verified, professional technicians across Africa. Get reliable repairs and
                installations done right, the first time.
              </p>
            </div>
          </StaggerItem>

          {/* How It Works Steps */}
          <StaggerItem>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-blue-100 rounded-full">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Describe Your Problem</h3>
                <p className="text-xs sm:text-sm text-gray-600 px-2">
                  Tell us what needs fixing - from plumbing leaks to electrical issues, we've got you covered.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-green-100 rounded-full">
                  <span className="text-lg sm:text-xl font-bold text-green-600">2</span>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Get Matched</h3>
                <p className="text-xs sm:text-sm text-gray-600 px-2">
                  Our smart algorithm matches you with the best available technician in your area.
                </p>
              </div>
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-purple-100 rounded-full">
                  <span className="text-lg sm:text-xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="font-semibold text-slate-800 text-sm sm:text-base">Get It Fixed</h3>
                <p className="text-xs sm:text-sm text-gray-600 px-2">
                  Track your technician's arrival, get the job done, and pay securely through the app.
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Services Grid */}
          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 text-center">Our Services</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  "Plumbing",
                  "Electrical",
                  "HVAC",
                  "Appliance Repair",
                  "Solar Installation",
                  "Carpentry",
                  "Painting",
                  "Cleaning Services",
                ].map((service) => (
                  <div key={service} className="bg-gray-50 rounded-lg p-2 sm:p-3 text-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

          {/* Benefits */}
          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-800 text-center">Why Choose Fixit?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800 text-sm sm:text-base">Verified Professionals</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      All technicians undergo background checks and skill assessments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800 text-sm sm:text-base">Fast Response</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Get matched with available technicians in minutes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800 text-sm sm:text-base">Quality Guaranteed</h4>
                    <p className="text-xs sm:text-sm text-gray-600">All work comes with our satisfaction guarantee.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-slate-800 text-sm sm:text-base">Trusted by Thousands</h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Join thousands of satisfied customers across Africa.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Pricing Info */}
          <StaggerItem>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6">
              <div className="text-center space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-orange-800">Transparent Pricing</h3>
                <p className="text-xs sm:text-sm text-orange-700">
                  See upfront pricing before booking. No hidden fees, no surprises. Compare quotes from multiple
                  technicians to find the best value.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-orange-800">
                    Free estimates • Secure payments • Money-back guarantee
                  </span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* CTA Buttons */}
          <StaggerItem>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/waitlist" className="w-full sm:w-auto">
                <Button
                  className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-6 sm:px-8 py-3 min-w-[160px] transition-all duration-200 hover:scale-105"
                  onClick={() => onOpenChange(false)}
                >
                  Join Waitlist
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 min-w-[160px] border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200 hover:scale-105"
                onClick={() => onOpenChange(false)}
              >
                Close
              </Button>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </DialogContent>
    </Dialog>
  )
}
